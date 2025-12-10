import React from 'react';
import logoImg from '../../public/images/logo.png'

const Logo = () => {
    return (
        <div className='flex flex-col items-center'>
            <p>Welcome to Rapid City !!!</p>
            <img className='h-16 w-16 rounded-full' src = {logoImg} alt="" />

            
        </div>
    );
};

export default Logo;