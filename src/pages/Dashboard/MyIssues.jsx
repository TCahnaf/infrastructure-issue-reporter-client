import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import IssueCards from '../../components/IssueCards';
import useCitizenInfo from '../../hooks/useCitizenInfo';
import { Link } from 'react-router';
document.title = 'user-issues'

const MyIssues = () => {

    const userInfo = useCitizenInfo();
    const axiosSecure = useAxiosSecure();
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");

    const handleIssueCategory = (e) => {
        setCategory(e.target.value)
       
        
    }

     const handleIssueStatus = (e) => {
        setStatus(e.target.value)
   
    }


    const {data:issues, refetch} = useQuery({

        queryKey: ['myIssues', userInfo?.email, category, status],
        enabled: !!userInfo?.email,

        queryFn: async () => {
            const res = await axiosSecure.get(`/issues?email=${userInfo?.email}&category=${category}&status=${status}&size=50`)

            return res.data;

        }


        


    })

    const userIssues = issues?.result

    

  





    return (
        <div className='space-y-3'>

          
      

            <h1 className='text-center text-2xl text-white font-bold'>Total number of issues found {userIssues?.length}</h1>

            <div className='flex flex-col lg:flex-row gap-5 items-center justify-center bg-white'>

            

             <div className='flex flex-col space-y-2'>
             <label className = "text-2xl">
    Filter By Categories
  </label>
            <select className='bg-gray-400' value={category} onChange = {handleIssueCategory}>
                 <option value="">All Categories</option>
                <option value="infrastructure">Infrastructure Damage</option>
                <option value="garbage">Garbage overflow</option>
                <option value="water">Water leakage</option>
            </select>
            </div>

              <div className=" flex flex-col space-y-2  ">
  <label className = "text-2xl">
    Filter By Status
  </label>

              <select className='bg-gray-400' value={status} onChange = {handleIssueStatus}>
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In progress</option>
                <option value="resolved">Resolved</option>
            </select>

            </div>

            </div>







            


        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>

            

            {
                userIssues?.map(issue => <IssueCards key={issue._id} issue={issue} reload={refetch}></IssueCards>)
            }
            
        </div>
        </div>
    );
};

export default MyIssues;