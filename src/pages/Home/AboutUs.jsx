import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import mayorImg from '../../../public/images/mayor.jpg'

const AboutUs = () => {
    return (
        <div className='min-h-screen flex flex-col items-center  space-y-12 pt-20 '>
            <h1 className='text-white text-5xl '>Our Principles:</h1>

             
            <h1 className='text-white text-4xl font-bold'>FAST SERVICE  |  ATTENTION TO DETAIL | OPPORTUNITY | OPTMIZATION | BETTER CITY LIFE</h1>

            <div className='flex text-white items-center justify-center gap-6 '>

               <div className='border-2 border-blue-500 rounded-xl w-1/2 text-2xl p-6'>
                 <Typewriter words = {['We are so happy to inform you that our webpage is about to get endorsed by Zohran Mamdani the Mayor Elect of New York City. Our mission is simple, we want New York City to always be the best. So what are you waiting for ? Join us today !!!']}
                 loop={0}  cursor  cursorStyle="|" typeSpeed={50} deleteSpeed={30} delaySpeed={2000}
                ></Typewriter>
               </div>

               

                <img className=' rounded-2xl shadow-xl h-[500px] w-[500px] w-24' src= {mayorImg} alt="" />



            </div>
            
        </div>
    );
};

export default AboutUs;