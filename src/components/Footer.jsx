import React from 'react';
import googleImg from '../../public/images/google-maps.png'
import gmailImg from '../../public/images/gmail.png'
import fbImg from '../../public/images/facebook.png'
import logo from '../../public/images/logo.png'

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-transparent text-base-content p-4">
  <aside>
    <div className='flex items-center justify-center gap-3'><h1 className='text-white font-bold text-2xl'>Rapid City Limited</h1>
    <img className='h-12 w-12 rounded-full' src= {logo} alt="" /></div>
    
    
    <div><div className='flex gap-4 mb-2'>
  
              <div className='tooltip tooltip-bottom' data-tip = "210 Joralemon Street"> <img className='h-12 w-12' src= {googleImg} alt="" /></div>
                <div className=' tooltip tooltip-bottom' data-tip = "rapidcity@gmail.com"> <img className='h-12 w-12' src= {gmailImg} alt="" /></div>
                 <div className='tooltip tooltip-bottom' data-tip = "Rapid City Limited "> <img className='h-12 w-12' src= {fbImg} alt="" /></div>
  
              
              </div></div>
              <p className='text-white font-bold'>Copyright © {new Date().getFullYear()} - All right reserved by Rapid City Ltd</p>
    
  </aside>

  
</footer>
    );
};

export default Footer;
