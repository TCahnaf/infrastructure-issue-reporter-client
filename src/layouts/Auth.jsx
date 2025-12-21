import React from 'react';
import Logo from '../components/Logo';
import { Outlet } from 'react-router';
import authImg from '../../public/images/authImg1.jpg'


const Auth = () => {





    return (
        <div className='p-4 bg-gradient-to-br from-zinc-200 via-white to-zinc-300




'> 
            <div className=''>
            <Logo></Logo></div>
            <div className='flex flex-col-reverse lg:flex-row gap-5 items-center justify-center'>
                <div>
                    <Outlet></Outlet>
                </div>

                <div>
                   <img className='mt-3 h-[300px] lg:w-[600px] w-[300px] rounded-lg' src= {authImg} alt="" />
                </div>


            </div>
            
        </div>
    );
};

export default Auth;