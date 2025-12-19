import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { ImCheckmark } from "react-icons/im";

const ManageIssues = () => {

    const [selectedStaff, setSelectedStaff] = useState(null)
     const [selectedIssue, setSelectedIssue] = useState(null)
  

     const axiosSecure = useAxiosSecure();

       const {data:issues = [], refetch} = useQuery({

        queryKey: ['issues'],
        queryFn: async () => {
            const res = await axiosSecure.get("/issues")
            return res.data;
        }

    })

      const {data:staffs = [], refetch:refetchStaff} = useQuery({

        queryKey: ['staffs'],
        queryFn: async () => {
            const res = await axiosSecure.get("/staffs")
            return res.data;
        }

    })
  
    const staffModalRef = useRef(null);

    const openStaffModal = (issue) => {
        setSelectedIssue(issue)
        staffModalRef.current.showModal();
    }

    const rejectIssue = (id) =>{

        const updatedInfo = {
            status:'rejected'
        }
        axiosSecure.patch(`/issue/${id}/reject`,updatedInfo).then(
            res => {

            if (res.data.matchedCount > 0){
            refetch();
            staffModalRef.current.close()
            Swal.fire({
                title: "Update Complete !!",
                text: "Issue has been rejected successfully",
                icon: "success"

                    })

     } }) 




        


    }





    const assignStaff = () => {

        const staffInfo = {
            name: selectedStaff.name,
            email: selectedStaff.email

        }

        axiosSecure.patch(`/issues/${selectedIssue._id}/assign-staff`, staffInfo).then( res => {

            if (res.data.matchedCount > 0){
            refetch();
            staffModalRef.current.close()
            Swal.fire({
                title: "Assigned !!",
                text: "staff has been assigned successfully",
                icon: "success"

                    })

     } 



        }



        )


    }







    return (
        <div className='flex flex-col space-y-6'>

            




            <h1 className='text-white text-center font-bold text-3xl'>All issues registered in the system </h1>


            <div className="overflow-x-auto">
                <table className="table bg-blue-300">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th>Staff Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            issues.map((issue, index) => <tr key={issue._id}>
                                <th>{index + 1}</th>
                                <td>{issue?.title}</td>
                                <td>{issue?.category}</td>
                                <td>{issue?.status}</td>
                                <td>{issue?.priority}</td>
                                <td>
                                    {!issue.assignedStaffEmail?<button disabled={issue.status === "rejected"} className='btn' onClick = {()=> openStaffModal(issue)}>Assign Staff</button>:<p>{`Assigned Staff:${issue.assignedStaffName}`}</p>}
                                    
                                    {/* <button disabled = {issue?.assignedStaffEmail} className='btn' onClick = {()=> openStaffModal(issue)}>Assign Staff</button>
                                {!issue?.assignedStaffName?<p>No Staff Assigned Yet</p>:<p>{`Assigned Staff:${issue.assignedStaffName}`}</p>} */}
                                </td>
                                <td className='flex gap-4'>
                                    
                                    <button
                                    disabled ={issue?.status !== "pending"}
                                         onClick={() =>rejectIssue(issue._id)}
                                        className='btn w-24 p-4  btn-square hover:bg-primary'>
                                        Reject Issue
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
                </div>


               < dialog  className="modal" ref={staffModalRef}>
  <div className="modal-box flex justify-center gap-4">
<fieldset className="  fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

    {
        staffs.map((staff, index) =>  (
            <div className={`border-2 mb-2 flex gap-5 items-center :${selectedStaff?._id === staff._id?"border-blue-500 bg-blue-100":""}`} key={staff._id}>
                <button onClick={()=> setSelectedStaff(staff)} className='btn square'><ImCheckmark /></button>
                <p>{index+1}. {staff.name}-{staff.email}</p>
                
            </div>
               
    ))}
      <button onClick = {assignStaff} className='btn mt-4'>Click To Confirm Staff Assignment</button>



{/* 
    // <select className='bg-blue-400' value={selectedStaff} onChange={(e) => setSelectedStaff(e.target.value)} >

    //     {
    //         staffs.map((staff, index) =>  (
    //             <option key={staff._id} value={staff}>
                   
    //             {index+1}. {staff.name}-{staff.email}

                  
    //             </option>


    //         ))
    //     }


    // </select> */}




  
    


 
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

export default ManageIssues;