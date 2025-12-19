import React, { useState } from 'react';
 

const Contact = () => {
    const [sucessMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage("Thank For Becoming A Member")
        e.target.reset();
    }
    return (
        <div>
           
            <div style={{  backgroundImage: "url('images/bg.jpg')"
   }} className='bg-cover ' >
                 <form className='  sm:p-3 md:p-4 lg:p-8 shadow-lg   flex flex-col gap-6 items-center justify-center text-white font-bold mt-20 ' onSubmit={handleSubmit}  >
                    <h1 className = " text-[#1B3D81] sm: text-lg lg:text-2xl font-bold text-center">Subscribe and join our community  !!</h1>
                    
                    <div className='flex flex-col gap-5 lg:flex-row'>
                        <img className='w-6 h-6 lg:h-12 lg:w-12 rotate-[-15deg]' src = "/images/gmails.png"></img>
                          <div className='flex gap-2  items-center  '>

                    <fieldset className='space-y-2'>
                        <div>
                    
                      <input className='border-2 border-[#C9AE5D] text-center bg-transparent rounded-xl   ' 
                      type="text"
                      placeholder ='phone number'
                      required
                      />
                      </div>

                      <div className='flex gap-4  items-center'>
                    
                      <input className='border-2 text-center border-[#C9AE5D] bg-transparent rounded-xl '
                      type="email"
                      placeholder='your email'
                      required
                      />
                      </div>
                      </fieldset>
                      <img className='w-6 h-6 lg:h-12 lg:w-12 rotate-15' src = "/images/gmails.png"></img>
                      </div>


                    </div>
                   
                      
                      {sucessMessage && (<p className='text-green-500 font-medium text-center'>{sucessMessage}</p>)}
                      <button className='button2 rotate-[-5deg] hover:rotate-0 transition-transform duration-300' type='submit'>Subscribe !!!</button>
                 </form>
          
            </div>
           
            
        </div>
            
            
       
    );
};

export default Contact;