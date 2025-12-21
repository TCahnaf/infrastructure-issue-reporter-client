import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManagerUsers = () => {
    document.title = 'manage-users';

    const axiosSecure = useAxiosSecure();

       const {data:users = [], refetch} = useQuery({

        queryKey: ['citizens'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data;
        }

    })

    const updateStatusBlock =(id) => {
        const update = {
            status:'blocked'
        }

        axiosSecure.patch(`/user/${id}/status`, update).then( res => {
                      if (res.data.modifiedCount > 0){
                      refetch();
                      Swal.fire({
                          title: "updated",
                          text: "user account status has been updated",
                          icon: "success"
          
                              })
          
                  
              
          
          
               } }) 


    }

    

      const updateStatusUnblock =(id) => {
        const update = {
            status:'active'
        }

        axiosSecure.patch(`/user/${id}/status`, update).then( res => {
                      if (res.data.modifiedCount > 0){
                      refetch();
                      Swal.fire({
                          title: "updated",
                          text: "user account status has been updated",
                          icon: "success"
          
                              })
          
                  
              
          
          
               } }) 


    }






    return (
        <div className='flex flex-col space-y-6'>
            
<h1 className='text-white text-center font-bold text-3xl'>All Users</h1>


            <div className="overflow-x-auto">
                <table className="table bg-blue-300">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subscription</th>
                            <th>Account Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.subscription}</td>
                                <td>{user.status}</td>
                                <td className='flex gap-4'>
                                    <button
                                    disabled ={user.status === "blocked"}
                                         onClick={() => updateStatusBlock(user._id)}
                                        className='btn w-24 p-4 bg-white btn-square hover:bg-primary'>
                                        Block 
                                    </button>
                                     <button
                                       disabled ={user.status === "active"}
                                         onClick={() => updateStatusUnblock(user._id)}
                                        className='btn w-24 p-4 btn-square hover:bg-primary'>
                                        Unblock
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
                </div>

            
        </div>
    );
};

export default ManagerUsers;