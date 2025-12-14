import React from 'react';
import useCitizenInfo from '../../hooks/useCitizenInfo';

const DashStats = () => {

    const userInfo = useCitizenInfo();


    return (
        <div>



        {`you submitted ${userInfo?.issuesCount} issues`}




            
        </div>
    );
};

export default DashStats;