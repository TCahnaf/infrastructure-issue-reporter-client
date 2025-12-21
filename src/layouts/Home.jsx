import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='min-h-screen bg-cover bg-center bg-fixed flex flex-col'
        style={{backgroundImage: "url('/images/6195005.jpg')"}}>
            <Navbar></Navbar>
             <Suspense fallback = {<div className='min-h-screen'>
                <span className="loading loading-bars loading-xl"></span>
            </div>}>
             <Outlet></Outlet></Suspense>
           <Footer></Footer>
            
        </div>
    );
};

export default Home;