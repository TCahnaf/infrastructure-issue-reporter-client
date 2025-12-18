import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useCitizenInfo from '../hooks/useCitizenInfo';
import { FcLike } from "react-icons/fc";
import { useNavigate } from 'react-router';


const IssueCards = ({issue, reload, hide}) => {


    // const location = useLocation();
    const {register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const userInfo = useCitizenInfo();
    const userBlocked = userInfo?.status === "blocked"

   const updateModalRef = useRef(null);
   const deleteModalRef = useRef(null);
   const [liked, setLiked] = useState(false)

   const openUpdateModal = () => {

    updateModalRef.current.showModal();


   }

   const openDeleteModal = () => {

    deleteModalRef.current.showModal();

   }


   const handleDelete = () => {

    axiosSecure.delete(`/issues/${issue._id}`).then( res => {
        if(res.data.deletedCount) {
            reload();
            updateModalRef.current.close();
            Swal.fire(
                {
          title: "deleted",
          text: "Thank you, your issue has been deleted successfully",
          icon: "success"
                }
            )
        }
    })


   }   


    const handleUpdate = (data) => {

        const updatedInfo = {
            ...data
        }

        axiosSecure.patch(`/issue/${issue._id}`, updatedInfo).then(res => {
            if (res.data.modifiedCount > 0)

                {
                      reload();
                     updateModalRef.current.close();
                Swal.fire({
          title: "updated",
          text: "Thank you, your issue has been updated successfully",
          icon: "success"

        })

                }

              
               

            }).catch( () => {
                 updateModalRef.current.close();
                Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Check the console for details."
        });

            })
        }

    const voteIssue = () =>{
            if(!userInfo){
              return navigate('/login')
            }
            const voteType = liked ? 'dislike':'like'

            axiosSecure.patch(`/issues/${issue._id}/vote`, {vote:voteType}).then( res => 
                {
                          if (res.data.matchedCount > 0){
                          setLiked(!liked)
                          reload();

        }
    })
}

const handlePayment = async(id) => {
   

    const paymentInfo = {

        subscriberEmail:userInfo?.email,
        issueId:id,
        cost:1,
        productName:'boost-fee'

    }

    const res = await axiosSecure.post('/create-checkout-session', paymentInfo)

    console.log(res)
    window.location.href = res.data.url
    



}
 




        






    
    


    return (
        <div>

            <div className="card bg-base-100 card-side shadow-sm p-4  flex items-center justify-center">

             
  <figure>
    <img className='h-[256px] w-[256px] rounded-lg '
      src= {issue.photo}
      alt="photo" />
  </figure>
  <div className = "card-body flex flex-col flex-start items-center justify-center space-y-4">
    <div className=''>
       <h2 className="card-title">{issue.title}</h2>
      <p>Category: {issue.category}</p>
        <p>Location: {issue.location}</p>
    </div>
   
    <div className="">
      <div className= {`${hide?"hidden":""} flex justify-center gap-2`} >

        <button className = {`${hide?"hidden":""} btn btn-primary`} disabled ={userBlocked} onClick={openUpdateModal}>Edit</button>
      <button disabled ={userBlocked}  onClick={openDeleteModal} className="btn btn-primary">Delete</button>
       </div>

       <div className='flex justify-center'>

       <button   disabled = {userInfo?.email === issue.userEmail} onClick={voteIssue} className={`square btn hover:bg-red-800`}><FcLike size={30}></FcLike></button>
       </div>



     
      
      <h2>Total Votes for this issue: {issue.upvoteCount}</h2>
    </div>
    {issue.priority === 'normal'?<div><button onClick = {()=>handlePayment(issue._id)} className='btn'>Click here to boost this issue</button></div>:<button className='btn'>Boosted</button>}
   
  </div>
</div>


<dialog ref = {updateModalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Please fill out the fields!</h3>


   <form onSubmit = {handleSubmit(handleUpdate)}>

            <div className="fieldset bg-base-200 border-base-300 rounded-box w-xs  border  p-4 ">
  <legend className="fieldset-legend"> please update the required information </legend>

  
<div className='flex flex-col gap-5  '>

    <div> <label className="label">Title</label>
  <input type="text" {...register('title', {required:true})} className="input" defaultValue={issue.title} />
     {errors.title?.type === 'required' && <p className='text-red-500'>Add the title</p>}
  </div>


   
    <div>
        

  <label className="label">Category: Select one from below</label>
  <select {...register('category')}   className='select' >
    <option value = "infrastructure">Infrastructure Damage</option>
    <option value = "garbage">Garbage overflow</option>
    <option value = "water">Water leakage</option>
  </select>
</div>
 <div>
  <label className="label">Location</label>
  <input type="text" {...register('location', {required:true})}  className="input" defaultValue={issue.location} />
   {errors.location?.type === 'required' && <p className='text-red-500'>Add the location</p>}
</div>


 <div>
  <label className="label">Upload a photo of the issue</label>
  <input type="text" {...register('photo', {required:true})}   className="input" defaultValue={issue.photo} />
   {errors.photo?.type === 'required' && <p className='text-red-500'>Add a photo url</p>}
</div>
</div>

 <div className='flex flex-col justify-center items-center mt-3 gap-2'> <label className="label">Description</label>
  <textarea type="text" {...register('description', {required:true})}  className="textarea" defaultValue={issue.description} rows={5} />
  {errors.description?.type === 'required' && <p className='text-red-500'>Add the description</p>}
  </div>
</div>

<div className='flex flex-col items-center gap-4 justify-center'>
     <button className="w-1/2 btn btn-neutral mt-4">click to update now</button>
     </div>

</form>


    
    

    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>


<dialog ref={deleteModalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box ">
    <div> <button  onClick={handleDelete} className='  btn btn-primary'>CLICK HERE TO CONFIRM DELETION !!!</button></div>
   
    <div className="modal-action">
      <form method="dialog">

        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>




            
        </div>
    );
};

export default IssueCards;


