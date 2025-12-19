import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCitizenInfo from '../../hooks/useCitizenInfo';
import IssueCards from '../../components/IssueCards';
import { useQuery } from '@tanstack/react-query';


document.title = 'issues-list'

const IssuesList = () => {


   
    const axiosSecure = useAxiosSecure();
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");
    const [search, setSearch] = useState("");

    const handleIssueCategory = (e) => {
        setCategory(e.target.value)
        
    }

     const handleIssueStatus = (e) => {
        setStatus(e.target.value)
   
    }

    const handleIssueSearch = (e) => {
        setSearch(e.target.value)
    }


    const {data:issues = [], refetch} = useQuery({

        queryKey: ['myIssues', category, status, search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/issues?category=${category}&status=${status}&search=${search}`)

            return res.data;

        }


        


    })




    return (
        <div className='p-20 space-y-4 text-white'>
            <div className='flex gap-4 border-2 rounded-lg justify-between items-center px-6 p-2'>
               <div className='flex flex-col space-y-2'>
             <label className = "text-2xl">
    Filter By Categories
  </label>
            <select className='border-2' value={category} onChange = {handleIssueCategory}>
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

              <select className='border-2' value={status} onChange = {handleIssueStatus}>
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In progress</option>
                 <option value="working">working</option>
                <option value="resolved">Resolved</option>
            </select>

            </div>

            <div className='text-black'>
                <label className="input text-black">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input className='text-black' onChange={handleIssueSearch} type="search" required placeholder="Search" />
</label>
            </div>
            </div>

            <div className='grid grid-cols-2 gap-5 items-center' >



            {issues.map(issue => <IssueCards key = {issue._id}issue={issue} reload={refetch} hide={true}></IssueCards>)}
            </div>

            
        </div>
    );
};

export default IssuesList;