import React, { useState } from 'react';
import googleImg from '../../../public/images/google-maps.png'
 

const Contact = () => {
    
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>


            

            <div className='flex flex-col justify-center h-[350px] w-1/2 border-4 border-white shadow-2xl '>
           
            <h1 className='text-white text-4xl text-center font-bold'>We would love to get in contact</h1>

            <div className='flex justify-center w-1/2 mt-3 text-white'>

            <div className='tooltip tooltip-bottom' data-tip = ""> <img className='h-24 w-24' src= {googleImg} alt="" /></div>
             <div className='tooltip tooltip-bottom' data-tip = ""> <img className='h-24 w-24' src= {googleImg} alt="" /></div>
              <div className='tooltip tooltip-bottom' data-tip = ""> <img className='h-24 w-24' src= {googleImg} alt="" /></div>
               <div className='tooltip tooltip-bottom' data-tip = ""> <img className='h-24 w-24' src= {googleImg} alt="" /></div>

            
            </div>

            
            
            </div>


       


         




          
           
            
        </div>
            
            
       
    );
};

export default Contact;