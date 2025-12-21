import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = ({stats, issueDescription}) => {
    const data = stats.map(item => ({
    name: item._id,
    value: item.count
  }));
    return (

      

        <div className='card bg-black shadow-xl border border-base-200 rounded-2xl w-full max-w-[320px]'>
            <div className='card-body h-70 text-gray-400'>
                <h2 className='card-title font-bold'>Issue Analytics</h2>
                <p>Status of issues {issueDescription}</p>


        

       
        <div className='h-[150px] w-full'>
        <div style={{ width: '100%', height: 120 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={{fill: 'transparent'}} />
          <Bar dataKey="value" fill="#570df8" barSize={15} />
        </BarChart>
      </ResponsiveContainer>
      </div>
      </div>
    </div>
    </div>

        
        
    );
};

export default Chart;