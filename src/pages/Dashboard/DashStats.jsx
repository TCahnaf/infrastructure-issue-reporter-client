
import React from 'react';
import useCitizenInfo from '../../hooks/useCitizenInfo';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Chart from './Chart';

const DashStats = () => {

    const userInfo = useCitizenInfo();
    const axiosSecure = useAxiosSecure();
    

       const {data:totalIssues} = useQuery({

        queryKey: ['issueCount', userInfo?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/issues?email=${userInfo?.email}`)
            return res.data;
        }

    })

    const issuesCount = totalIssues?.total;

     const {data:stats = []} = useQuery({

        queryKey: ['issueStatsUser', userInfo?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/stats?userEmail=${userInfo?.email}`)
            return res.data;
        }

    })

      const {data:payments = []} = useQuery({

        queryKey: ['userPayments', userInfo?.email],
        enabled: !!userInfo?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user-payments?email=${userInfo?.email}`)
            return res.data;
        }

    })

 




    return (
        
        <div className='flex flex-col space-y-10 items-center justify-center pt-20'>
            <h1 className='text-white text-4xl font-bold text-center'>Summary of your activity</h1>
        
        <div className='md:flex-row flex-wrap gap-4'>
            


     


<div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
  <div className="z-10 flex flex-col items-center gap-2">
    <span className="text-slate-400 text-6xl font-bold">{issuesCount} </span>
    <p className="text-gray-50">Issues Submitted</p>
  </div>
</div>


<div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
  <div className="z-10 flex flex-col items-center gap-2">
    <span className="text-slate-400 text-6xl font-bold">{payments.length} </span>
    <p className="text-gray-50">Total Payments</p>
  </div>
</div>

<Chart stats={stats} issueDescription={'submitted'}></Chart>
  




            
        </div>
        </div>
    );
};

export default DashStats;