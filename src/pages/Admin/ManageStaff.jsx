import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';

import axios from 'axios';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const ManageStaff = () => {

    const updateModalRef = useRef(null);
    const deleteModalRef = useRef(null);
    const addStaffModalRef = useRef(null);

    const {register, handleSubmit, reset, formState:{errors}} = useForm();


    const {
  register: registerUpdate,
  handleSubmit: handleUpdateSubmit,
  formState: { errors: updateErrors }
} = useForm();




    const [selectedstaff, setSelectedStaff] = useState(null);


    const axiosSecure = useAxiosSecure();


   const openUpdateModal = (staff) => {
    setSelectedStaff(staff)
    updateModalRef.current.showModal();
   }

   const openDeleteModal = (staff) => {
    setSelectedStaff(staff)
    deleteModalRef.current.showModal();

   }

    const openStaffModal = () => {
    reset(); 
    addStaffModalRef.current.showModal();

   }








    const handleRegistration = (data) => {
        const img = data.photo[0]
        const formData = new FormData();
        formData.append('image',img)
        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`, formData).then( res => {
                
        const staffPhoto = res.data.data.url
        const staffInfo = {
                    ...data,
                    photo:staffPhoto
                }

                axiosSecure.post('/create-staff', staffInfo).then( res => {
                    if(res.data.insertedId){
                        refetch();
                        addStaffModalRef.current.close()
                        Swal.fire({

               title: "staff created",
               text: "Thank you",
               icon: "success"

                        })
                        

                    }
                
                })


            })
                
     .catch( error => {
        console.log(error)
     })
     } 

       const {data:staffs = [], refetch} = useQuery({

        queryKey: ['staffs'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/staffs`)
            return res.data;
        }

    })



       
      

   const handleUpdate = (data) => {

          const updatedInfo = {
              ...data
          }
  
          axiosSecure.patch(`/staffs/${selectedstaff?._id}`, updatedInfo).then( res => {
              if (res.data.matchedCount > 0){
              refetch();
              updateModalRef.current.close()
              Swal.fire({
                  title: "updated",
                  text: "Awesome, staff profile has been updated",
                  icon: "success"
  
                      })
  
          
      
  
  
       } }) 
  }

  const handleDelete = () => {
  
      axiosSecure.delete(`/staffs/${selectedstaff?._id}`).then( res => {
          if(res.data.deletedCount) {
              refetch();
              deleteModalRef.current.close();
              Swal.fire(
                  {
            title: "deleted",
            text: "Staff  has been deleted successfully",
            icon: "success"
                  }
              )
          }
      })
  
  
     }   









    return (
        <div>

            <h1>All staff members </h1>


            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Photo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            staffs.map((staff, index) => <tr key={staff._id}>
                                <th>{index + 1}</th>
                                <td>{staff.name}</td>
                                <td>{staff.email}</td>
                                <td><img className='h-6 w-6 rounded-full' src = {staff.photo} alt="" /></td>
                                <td className='flex gap-4'>
                                    <button
                                         onClick={() => openUpdateModal(staff)}
                                        className='btn w-24 p-4  btn-square hover:bg-primary'>
                                        Update 
                                    </button>
                                     <button
                                        onClick={() => openDeleteModal(staff)}
                                        className='btn w-24 p-4 btn-square hover:bg-primary'>
                                        Delete
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
                </div>





















            <button onClick={openStaffModal} className='btn'>Add a new staff</button>


        





<dialog  className="modal" ref={updateModalRef}>
  <div className="modal-box flex justify-center gap-4">
<fieldset className="  fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  
    <form onSubmit = {handleUpdateSubmit(handleUpdate)} >

 <div>
  <label className="label">Update Staff Name </label>
  <input type="text" {...registerUpdate('name', {required:true})}   className="input mb-3" defaultValue={selectedstaff?.name} />
   {updateErrors.name?.type === 'required' && <p className='text-red-500'>Add Staff name</p>}
</div>

 <div>
  <label className="label">Update Staff Photo URL </label>
  <input type="text" {...registerUpdate('photo', {required:true})}   className="input" defaultValue={selectedstaff?.photo} />
   {updateErrors.photo?.type === 'required' && <p className='text-red-500'>Add a photo url</p>}
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








            <dialog ref = {addStaffModalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Please fill out the fields to register staff!</h3>

   <div className="card-body">
         <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset space-y-1">

             <label className="label">Staff Name</label>
          <input type="text" {...register('name', {required:true})} className="input" placeholder="name" />
          {errors.name?.type === 'required' && <p className='text-red-500'>Add your name</p>}

            <label className="label">Upload Photo</label>
          <input type="file" {...register('photo', {required:true})} className="file-input" placeholder="name" />
          {errors.photo?.type === 'required' && <p className='text-red-500'>Add your photo</p>}

          


          <label className="label">Email</label>
          <input type="email" {...register('email', {required:true})} className="input"  placeholder="Email" />
          {errors.email?.type === 'required' && <p className='text-red-500'>Add your email</p>}

          <label className="label">Password</label>
          <input type="password" {...register('password', {required:true, minLength:6, pattern:/^(?=.*[a-z])(?=.*[A-Z]).+$/})} className="input" placeholder="Password" />
             {errors.password?.type === 'required' && <p className='text-red-500'>Add a password</p>}
             {errors.password?.type === 'minLength' && <p className='text-red-500'>password must be at least 6 characters</p>}
            {errors.password?.type === 'pattern' && <p className='text-red-500'>password must be contain at least one lowercase and one uppercase letter</p>}

        

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
     
      </div>

    
    

    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>


<dialog ref={deleteModalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box ">
    <div> <button  onClick={handleDelete} className='  btn btn-primary'>Click to confirm the deletion of this staff !</button></div>
   
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


export default ManageStaff;