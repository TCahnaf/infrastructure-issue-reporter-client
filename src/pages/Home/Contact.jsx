import React, { useState } from 'react';
import googleImg from '../../../public/images/google-maps.png'
import gmailImg from '../../../public/images/gmail.png'
import fbImg from '../../../public/images/facebook.png'
 

const Contact = () => {

    document.title = 'contact-page';
    
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>


            

            <div className='flex flex-col justify-center   lg:h-[350px] lg:w-[600px] bg-[] border-4 p-4 border-white shadow-2xl bg-gradient-to-br from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] min-h-screen '>
           
            <h1 className=' text-xl md:text-2xl lg:text-4xl text-center font-bold'>We would love to get in contact</h1>

            <div className='flex justify-center items-center  mt-3 text-white gap-4'>

            <div className='tooltip tooltip-bottom' data-tip = "210 Joralemon Street"> <img className='h-18 w-18 lg:h-24 lg:w-24' src= {googleImg} alt="" /></div>
              <div className='tooltip tooltip-bottom ' data-tip = "rapidcity@gmail.com"> <img className='h-18 w-18 lg:h-30 lg:w-24' src= {gmailImg} alt="" /></div>
               <div className='tooltip tooltip-bottom' data-tip = "Rapid City Limited "> <img className='h-18 w-18 lg:h-24 lg:w-24' src= {fbImg} alt="" /></div>

            
            </div>

            
            
            </div>


       


         




          
           
            
        </div>
            
            
       
    );
};

export default Contact;