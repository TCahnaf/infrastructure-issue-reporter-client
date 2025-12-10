import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className='min-h-screen bg-primary p-20 '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <h1>This is where the footer will be layed out</h1> */}
            
        </div>
    );
};

export default Home;