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
    document.title = 'home'
    const axiosSecure = useAxiosSecure();


const {data, refetch} = useQuery({

        queryKey: ['issueCount'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/issues?status=resolved&limit=6`)
            return res.data;
        }

    })

const issuesResolved = data?.result;

const {data:issues} = useQuery({

        queryKey: ['issueCountAll'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/issues`)
            return res.data;
        }

    })

     const totalIssues = issues?.total



    return (
        <div className='p-20 flex flex-col justify-center space-y-8'>
              <h1 className='font-bold text-white text-4xl text-center'>Public Infrastructure Reporting System<span className='text-blue-600'><br/>for New Yorker's</span></h1>

            <div className='flex flex-col md:flex-row gap-4 items-center justify-center '>

              
            <Slider></Slider>
            <Features></Features>

            
            
            
            </div>
              <h1 className='text-white text-center text-lg md:text-2xl font-bold mt-2 border-2 p-4 mx-auto w-60 md:w-[500px] '>!!! check out some of the issues that have been resolved recently !!!</h1>


             <div className='grid grid-cols-1 md:grid-cols lg:grid-cols-3'>
                {
                    issuesResolved?.map(issue => <IssueCards key={issue._id} issue={issue} reload={refetch} hide={true} ></IssueCards>)
                }


           

             </div>
             <HowItWorks></HowItWorks>

             {/* stat card */}
          
<div className='flex justify-center'>
    <div
  className="relative h-[18em] w-[20em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] via-purple-700/80 to-[rgba(75,30,133,0.2)] text-white font-nunito p-[1.5em] flex justify-center items-left flex-col gap-[1em] backdrop-blur-[12px] hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 group/card hover:-translate-y-1"
>
  <div
    className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-fuchsia-500/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[1.5em]"
  ></div>
  <div
    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,190,0.1),transparent_60%)] group-hover/card:animate-pulse"
  ></div>


  <div
    className="relative z-10 transition-transform duration-300 group-hover/card:translate-y-[-2px] space-y-3"
  >
    <h1
      class="text-[2.2em] font-bold bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent"
    >
      {totalIssues} Issues Submitted Just Now
    </h1>
    <p className="text-[0.9em] text-purple-100/90 leading-relaxed font-light">
      We look forward to making this city a better place to live for everyone.
    </p>
  </div>

  

  <div
    className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent blur-sm group-hover/card:animate-pulse"
  ></div>
</div>

</div>
             

           

            <div className=''>
                <h1 className='text-white text-center text-2xl font-bold'>Our Proud Sponsors</h1>
                 <Sponsors></Sponsors>
            </div>

            

            
           
            
        </div>
    );
};

export default HomePage;