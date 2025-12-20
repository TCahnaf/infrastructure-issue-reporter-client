import React from 'react';
import Slider from './Slider';
import Sponsors from './Sponsors';
import Footer from '../../components/Footer';
import Features from './Features';
import HowItWorks from './HowItWorks';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import IssueCards from '../../components/IssueCards';

const HomePage = () => {
    const axiosSecure = useAxiosSecure();


const {data, refetch} = useQuery({

        queryKey: ['issueCount'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/issues?status=resolved&limit=6`)
            return res.data;
        }

    })
const issuesResolved = data?.result;



    return (
        <div className='p-20 flex flex-col justify-center space-y-8'>
              <h1 className='font-bold text-white text-4xl text-center'>Public Infrastructure Reporting System<span className='text-blue-600'><br/>for New Yorker's</span></h1>

            <div className='flex gap-4 items-center justify-center '>

              
            <Slider></Slider>
            <Features></Features>

            
            
            
            </div>
              <h1 className='text-white text-center text-2xl font-bold mt-2 border-2 mx-auto p-4 w-[500px]'>!!! check out some of the issues that have been resolved recently !!!</h1>


             <div className='grid grid-cols-3'>
                {
                    issuesResolved?.map(issue => <IssueCards key={issue._id} issue={issue} reload={refetch} hide={true} ></IssueCards>)
                }


           

             </div>
             <HowItWorks></HowItWorks>

           

            <div className=''>
                <h1 className='text-white text-center text-2xl font-bold'>Our Proud Sponsors</h1>
                 <Sponsors></Sponsors>
            </div>

            

            
           
            
        </div>
    );
};

export default HomePage;