import React from 'react';
import { Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div>
            <h1>This will be the Dashboard</h1>
            <Outlet></Outlet>

            <h1>This will be the footer</h1>
            
        </div>
    );
};

export default Dashboard;