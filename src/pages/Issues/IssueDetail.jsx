import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import IssueCards from '../../components/IssueCards';
import nycImg from '../../../public/images/wallpaper.jpg'

const IssueDetail = () => {
   document.title = 'issue-details';
    const {id} = useParams();
    const axiosSecure = useAxiosSecure();

     const {data:issueLog = []} = useQuery({

        queryKey: ['log', id],
        enabled: !!id,
        queryFn: async () => {
            const res = await axiosSecure.get(`/issue-log/${id}`)
            return res.data;
        }

    })

    console.log(issueLog.length)
  

     const {data:issue, isLoading, refetch} = useQuery({

        queryKey: ['issueDetail', id],
        enabled: !!id,
        queryFn: async () => {
            const res = await axiosSecure.get(`/issue/${id}`)
            return res.data;
        }

    })
      if (isLoading) {
        return <div className="p-20 text-center"><span className="loading loading-spinner"></span></div>;
    }


    return (
        <div className='p-20'>

            <div className='flex flex-col lg:flex-row justify-center items-center space-y-6'>

            <div className='flex justify-center'>

          <IssueCards issue={issue} reload={refetch} ></IssueCards>

            </div>
            <ul className="timeline timeline-vertical">
    {issueLog.map((log, index) => (
      <li key={log._id}>
        {index !== 0 && <hr className="bg-primary" />}

        <div className={`${index % 2 === 0 ? "timeline-start bg-green-500" : "timeline-end bg-sky-600"} timeline-box`}>
          <span className="font-bold">{log.event.type}</span>
          <br />
          <span className="text-xs opacity-70">
            {new Date(log.event.createdAT).toLocaleDateString()}
          </span>
        </div>

        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-primary h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {index !== issueLog.length - 1 && <hr className="bg-primary" />}
      </li>
    ))}
  </ul>

        
</div>

<div className="hero bg-blue-500 min-h-screen mt-6">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={nycImg}
      className=" rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Did you know!</h1>
      {issue.category === 'garbage' && <p className="py-6">
         New York City uses a highly organized sanitation system that operates on strict schedules and detailed routes to keep the city clean. Garbage and recycling are separated at the source and collected by specialized sanitation crews trained to handle dense urban waste efficiently. The city also enforces sanitation laws, including fines for improper disposal, which encourages public cooperation. Advanced routing, compacting trucks, and centralized waste transfer stations help reduce congestion and environmental impact. This coordinated process makes NYC’s sanitation system one of the most effective and reliable urban waste management systems in the world.
        </p>}
        {issue.category === 'water' && <p className="py-6">
         New York City’s water system is one of the largest and most reliable in the world, supplying clean drinking water to millions of residents every day. The water comes from protected upstate reservoirs, reducing the need for extensive filtration. A vast network of aqueducts, tunnels, and mains delivers water across all five boroughs. The city regularly monitors water quality to meet strict health and safety standards. Ongoing infrastructure upgrades help prevent leaks and ensure long-term sustainability. This efficient system makes NYC’s water both safe and dependable.
        </p>}
        {issue.category.includes('infra') && <p className="py-6">
            New York City’s infrastructure is built to support one of the largest and most complex urban populations in the world. Its extensive subway, bus, and commuter rail systems move millions of people efficiently every day. The city’s water supply and sewer networks are among the oldest yet most reliable, delivering clean water from protected reservoirs. Bridges, tunnels, and highways connect all five boroughs and support constant economic activity. NYC also invests heavily in maintaining and upgrading its infrastructure to meet modern demands. This scale, redundancy, and continuous improvement make its infrastructure both resilient and essential to the city’s success.
        
        </p>}
     
    </div>
  </div>
</div>




            
        </div>
    );
};

export default IssueDetail;