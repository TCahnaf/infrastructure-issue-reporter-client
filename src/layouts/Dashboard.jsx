import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router';
import logoImg from '../../public/images/logo.png'
import { BsWindowSidebar } from 'react-icons/bs';



const Dashboard = () => {
    const [showMenu, setShowMenu] = useState("-translate-x-full");

    const toggleMenuBar = () => {
        if(showMenu === "translate-x-0") {
            setShowMenu("-translate-x-full");
        } else setShowMenu("translate-x-0")

        
    }
    return (
      <div className=' min-h-screen'>
       

            <div className= {`bg-gray-100 w-40 h-screen ${showMenu} fixed left-0 top-0 `}>

                <div className='p-4 flex justify-center'>
                    <div className='border-b'> <Link to = {"/"}>Home Page
            </Link></div>
           

                </div>

            

            </div>


         

           

            <div className='flex bg-gray-200 items-center p-4 justify-center gap-5'>

                <div className='flex gap-5'>
                       <button onClick = {toggleMenuBar}> <BsWindowSidebar />
 </button>
              
          

                <h1>Dashboard</h1>
                </div>
               
                <div><img className='h-12 w-12 rounded-full' src= {logoImg} alt="" /></div>
                
                

            </div>
        
      </div>
    );
};

export default Dashboard;