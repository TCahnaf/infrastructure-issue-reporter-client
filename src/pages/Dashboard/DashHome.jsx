import React from 'react';
import useCitizenInfo from '../../hooks/useCitizenInfo';
import DashStatsStaff from './DashStatsStaff';
import DashStats from './DashStats';
import DashStatsAdmin from './DashStatsAdmin';


const DashHome = () => {
    document.title = 'dashboard'

    const userInfo = useCitizenInfo();

    if(userInfo?.role === 'staff') {
        return <DashStatsStaff></DashStatsStaff>
    }

    else if (userInfo?.role === 'admin'){
        return <DashStatsAdmin></DashStatsAdmin>
    }

    else {
        return <DashStats></DashStats>
    }
   
};

export default DashHome;