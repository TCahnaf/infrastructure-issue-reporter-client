import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import mayorImg from '../../../public/images/mayor.jpg'

const AboutUs = () => {
    document.title = 'about';
    return (
        <div className='min-h-screen flex flex-col items-center mx-auto lg:w-full md:w-[300px] w-[400px]  space-y-12 pt-20 px:4 '>
            <h1 className='text-white text-2xl md:text-3xl lg:text-5xl '>Our Principles:</h1>

             
            <h1 className='text-white text-lg md:text-xl lg:text-4xl font-bold'>FAST SERVICE  |  ATTENTION TO DETAIL | OPPORTUNITY | OPTMIZATION | BETTER CITY LIFE</h1>

            <div className='flex flex-col-reverse lg:flex-row text-white items-center justify-center gap-6 '>

               <div className='border-2 border-blue-500 rounded-xl  lg:w-1/2 text-2xl p-6'>
                 <Typewriter words = {['We are so happy to inform you that our webpage is about to get endorsed by Zohran Mamdani the Mayor Elect of New York City. Our mission is simple, we want New York City to always be the best. So what are you waiting for ? Join us today !!!']}
                 loop={0}  cursor  cursorStyle="|" typeSpeed={50} deleteSpeed={30} delaySpeed={2000}
                ></Typewriter>
               </div>

               

                <img className=' rounded-2xl shadow-xl w-[200px] h-[200px] lg:h-[400px] lg:w-[400px] ' src= {mayorImg} alt="" />



            </div>
            
        </div>
    );
};

export default AboutUs;