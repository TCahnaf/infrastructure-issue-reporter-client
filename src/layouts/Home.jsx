import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='min-h-screen bg-cover bg-center bg-fixed flex flex-col'
        style={{backgroundImage: "url('/images/6195005.jpg')"}}>
            <Navbar></Navbar>
            <Outlet></Outlet>
           <Footer></Footer>
            
        </div>
    );
};

export default Home;