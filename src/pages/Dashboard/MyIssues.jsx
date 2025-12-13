import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import IssueCards from '../../components/IssueCards';

const MyIssues = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");

    const handleIssueCategory = (e) => {
        setCategory(e.target.value)
        console.log(e.target.value)
        

    }

     const handleIssueStatus = (e) => {
        setStatus(e.target.value)
   
    }


    const {data:issues = [], refetch} = useQuery({

        queryKey: ['myIssues', user?.email, category, status],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/issues?email=${user?.email}&category=${category}&status=${status}`)

            return res.data;

        }


        


    })

  





    return (
        <div className='space-y-3'>

      

            <h1 className='text-center font-bold'>Total number of issues found {issues.length}</h1>

            <div className='flex gap-5 items-center justify-center '>

            

             <div className='flex flex-col space-y-2'>
             <label className = "text-2xl">
    Filter Bills By Categories
  </label>
            <select value={category} onChange = {handleIssueCategory}>
                 <option value="">All Categories</option>
                <option value="infrastructure">Infrastructure Damage</option>
                <option value="garbage">Garbage overflow</option>
                <option value="water">Water leakage</option>
            </select>
            </div>

              <div className=" flex flex-col space-y-2  ">
  <label className = "text-2xl">
    Filter Bills By Categories
  </label>

              <select value={status} onChange = {handleIssueStatus}>
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In progress</option>
                <option value="resolved">Resolved</option>
            </select>

            </div>

            </div>







            


        <div className='grid grid-cols-2 gap-5 items-center'>

            

            {
                issues.map(issue => <IssueCards key={issue._id} issue={issue} reload={refetch}></IssueCards>)
            }
            
        </div>
        </div>
    );
};

export default MyIssues;