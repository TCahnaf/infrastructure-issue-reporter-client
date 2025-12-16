import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useCitizenInfo from '../../hooks/useCitizenInfo';

const ReportIssue = () => {

const {register, handleSubmit, formState:{errors}} = useForm();
const {user} = useAuth()



 const navigate = useNavigate();
 const axiosSecure = useAxiosSecure();
 const userInfo = useCitizenInfo();

 const unlimitedAccess = userInfo?.issuesCount === 3 && userInfo?.subscription === "free"



 console.log(userInfo)

const handleReport = (data) => {
  const img = data.photo[0];
  const formData = new FormData();
  formData.append('image', img);
  axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`, formData).then(res => {

    const imageURL = res.data.data.url

    const updatedData = {
      ...data,
      photo: imageURL,
      userEmail:user?.email

    }
    axiosSecure.post('/issues', updatedData).then(res => {
      if(res.data.insertedId){
        Swal.fire({
          title: "Inserted",
          text: "Thank you, your request has been submitted successfully",
          icon: "success"

        })
        
        navigate("/dashboard/my-issues")

      }
    })


  })






  
}



    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">

          {userInfo?.status === "blocked"&& <div>
            <h1>SORRY BUT YOUR ACCOUNT IS BLOCKED</h1>
            
            </div>}

             

            <form className={userInfo?.status === 'blocked'?"hidden":""} onSubmit = {handleSubmit(handleReport)}>

            <div className="fieldset bg-base-200 border-base-300 rounded-box  border min-h-screen w-[600px] p-8 ">
  <legend className="fieldset-legend">Fill out the form </legend>

  
<div className='grid grid-cols-2 gap-5 items-center '>

    <div> <label className="label">Title</label>
  <input type="text" {...register('title', {required:true})} className="input" placeholder="what is the issue ?" />
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
  <input type="text" {...register('location', {required:true})}  className="input" placeholder="where did this happen ?" />
   {errors.location?.type === 'required' && <p className='text-red-500'>Add the location</p>}
</div>


 <div>
  <label className="label">Upload a photo of the issue</label>
  <input type="file" {...register('photo', {required:true})}   className="file-input" placeholder="Name" />
   {errors.photo?.type === 'required' && <p className='text-red-500'>Add a photo</p>}
</div>
</div>

 <div className='flex flex-col justify-center items-center mt-3 gap-2'> <label className="label">Description</label>
  <textarea type="text" {...register('description', {required:true})}  className="textarea" placeholder="describe the issue" rows={5} />
  {errors.description?.type === 'required' && <p className='text-red-500'>Add the description</p>}
  </div>




 

 <div className='flex flex-col items-center gap-4 justify-center'>
     <button disabled={unlimitedAccess } className="w-1/2 btn btn-neutral mt-4">submit</button>
     <div className= {`${unlimitedAccess?"":"hidden"}`}>
      <h1 className='text-center font-bold'>You have ran out of free issue reports, please click below to subscribe and get access to unlimited reports</h1>
     </div>
     {unlimitedAccess &&   <Link to = "/dashboard/profile-page"><button className='btn btn-primary' >Subscribe to report </button></Link> }
   
     

 </div>
</div>

</form>
            
        </div>
    );
};

export default ReportIssue;