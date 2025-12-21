import React, { useState } from 'react';
import useCitizenInfo from '../../hooks/useCitizenInfo';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AssignedIssues = () => {

    const userInfo = useCitizenInfo();

    const axiosSecure = useAxiosSecure();

    const [selectedStatus, setSelectedStatus] = useState();

       const {data:issuesAssigned = [], refetch} = useQuery({

        queryKey: ['assignedIssues'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/issues/assigned?email=${userInfo.email}&size=50`)
            return res.data;
        }

    })

    const handleStatusUpdate = (id,status) => {
        // setSelectedStatus(status)
        const updateInfo  = {
            status:status
        }
        axiosSecure.patch(`issue/${id}/staff-updates`, updateInfo).then(

            res => {
                          if (res.data.matchedCount > 0){
                          refetch();
                          Swal.fire({
                              title: "update complete",
                              text: "issue status has been updated",
                              icon: "success"
              
                                  })
              
                      
                  
              
              
                   }


        })







    }




    return (
        <div className='flex flex-col space-y-6  '>

            <h1 className='text-white text-3xl font-bold text-center'>Issues Assigned To You, Let's get to work !!!</h1>
            <div className="overflow-x-auto">
                <table className="table bg-sky-300">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Priority</th>
                            <th>Issue Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            issuesAssigned.map((issue, index) => <tr key={issue._id}>
                                <th>{index + 1}</th>
                                <td><img className='rounded-full h-6 w-6' src= {issue.photo} alt="" /></td>
                                <td>{issue.title}</td>
                                <td>{issue.location}</td>
                                <td>{issue.priority}</td>
                                 <td>{issue.status}</td>

                                <td className=''>
                                   <select 
                                    className="select select-bordered select-sm" 
                                    onChange={(e) => handleStatusUpdate(issue._id, e.target.value)}
                                    value={issue.status}
                                >
                                      <option disabled ={issue.status !== "pending"} value="in-progress">pending</option>
                                    <option disabled ={issue.status !== "pending"} value="in-progress">in-progress</option>
                                     <option disabled = {issue.status !== "in-progress"} value="working"> working</option>
                                    <option disabled = {issue.status !== "working"} value="resolved">Resolved</option>
                                   
                                </select>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
                </div>



            
        </div>
    );
};

export default AssignedIssues;