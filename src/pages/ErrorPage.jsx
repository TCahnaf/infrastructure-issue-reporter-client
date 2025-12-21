import React from 'react';

import { Link } from 'react-router';
 document.title = "error-page"

const ErrorPage = () => {
   
    return (
        <div className='flex flex-col justify-center items-center  p-20 max-w-[700px] mx-auto mt-20 min-h-screen'>
            <img className='w-[500px] h-[500px]' src= "/images/error-404.png" alt="" />

            <div className='space-y-3 mt-10 '>
            <h1 className='text-4xl font-bold text-center'>Oops, page not found!</h1>
            <p className='text-center'>The page you are looking for is not available.</p>
            <div className='flex justify-center'> <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-2 rounded-md w-[150px] h-[48px]'><Link to = "/">Go Back!</Link></button></div>
           
            </div>
            
        </div>
    );
};

export default ErrorPage;