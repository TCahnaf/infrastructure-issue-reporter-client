import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2';

import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useCitizenInfo from '../hooks/useCitizenInfo';


const ProfileUpdate = () => {

    const {user} = useAuth();

    const axiosSecure = useAxiosSecure();

    const userInfo = useCitizenInfo();

   
const handlePayment = async() => {
   

    const paymentInfo = {

        subscriberEmail:userInfo?.email,
        cost:10,
        productName:'premium-subscription'

    }

    const res = await axiosSecure.post('/create-checkout-session', paymentInfo)

    console.log(res)
    window.location.href = res.data.url
    



}





    const {register, handleSubmit, formState:{errors}} = useForm();


    const updateModal = useRef(null);
    const openModal = () => {
        updateModal.current.showModal();

    }

    const handleUpdate = (data) => {

        const updatedInfo = {
            ...data
        }

        axiosSecure.patch(`/users/${userInfo?._id}`, updatedInfo).then( res => {
            if (res.data.matchedCount > 0){
            refetch();
            updateModal.current.close()
            Swal.fire({
                title: "updated",
                text: "Awesome, your profile has been updated",
                icon: "success"

                    })

        
    


     } }) 
}

    return (

        <div className='flex flex-col items-center justify-center gap-8'>

            {
                userInfo?.status === "blocked" && <h1 className='text-center text-red-500'>You have been blocked, please contact authorities</h1>
            }



              <div >
                <img className='h-48 w-48 rounded-full' src= {userInfo?.photo} alt="" />
 

    <button onClick={openModal} className='btn btn-primary'>Click Here to Update your profile</button>
       </div>


       {
        userInfo?.subscription === 'free' && <div className={`mt-10 card w-96 bg-base-100 shadow-sm ${userInfo?.role === 'admin' || userInfo?.role === 'staff'?"hidden":""}`}>
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">Premium</h2>
      <span className="text-xl">$10/one time fee</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Ulimited issues can be reported</span>
      </li>
      
      
    </ul>
    <div className="mt-6">
      <button onClick={handlePayment} className="btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>
       }

       {
         userInfo?.subscription === 'premium' && <h1 className='text-center'>Thank you for being a premium customer !!

         </h1>
       }


<dialog  className="modal" ref={updateModal}>
  <div className="modal-box flex justify-center gap-4">
<fieldset className="  fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  
    <form onSubmit = {handleSubmit(handleUpdate)} >

 <div>
  <label className="label">Update Your Name </label>
  <input type="text" {...register('name', {required:true})}   className="input mb-3" defaultValue={userInfo?.name} />
   {errors.name?.type === 'required' && <p className='text-red-500'>Add your name</p>}
</div>

 <div>
  <label className="label">Add a photo URL </label>
  <input type="text" {...register('photo', {required:true})}   className="input" defaultValue={userInfo?.photo} />
   {errors.photo?.type === 'required' && <p className='text-red-500'>Add a photo url</p>}
</div>



 <button className="btn btn-neutral mt-4">Click to confirm update</button>

    </form>



 
</fieldset>
   
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

export default ProfileUpdate;