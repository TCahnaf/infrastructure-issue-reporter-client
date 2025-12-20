import React from 'react';
import logoImg from '../../public/images/logo.png'

const Logo = () => {
    return (
        <div className='flex flex-col gap-2 items-center justify-center'>
            <p className='font-bold text-xl'>Welcome to Rapid City !!!</p>
            <img className='h-28 w-28 rounded-full' src = {logoImg} alt="" />

           
        </div>
    );
};

export default Logo;