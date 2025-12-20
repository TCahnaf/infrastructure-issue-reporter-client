import React, { useState } from 'react';
import Logo from './Logo';
import { Link, NavLink } from 'react-router';
import Dashboard from '../layouts/Dashboard';
import useAuth from '../hooks/useAuth';
import useCitizenInfo from '../hooks/useCitizenInfo';

const Navbar = () => {
    const {user, logOut} = useAuth();
    const userInfo = useCitizenInfo();
     const [showMenu, setShowMenu] = useState(false)


     const toggleMenu = () => {
        setShowMenu(prev => !prev)

     }

     
     
     
  


    return (

        <div className='w-full'>
            <nav className='bg-transparent  justify-between  w-full  text-white px-8'>

                <div className='flex  items-center justify-between  p-4'>

                <div>
                    <Logo></Logo>
                </div>

                <div className='flex gap-5  p-5 rounded-2xl font-bold text-xl '>
                    <NavLink to={"/"}>
                    Home

                    </NavLink>
                      <NavLink to={"/issues"}>
                        Issues     
                    </NavLink>
                       <NavLink to={"/about"}>
                        About     
                    </NavLink>

                       <NavLink to={"/contact"}>
                        Contact Us     
                    </NavLink>
                    
                </div>

                <div>
                    {!user? <div className='flex items-center justify-center gap-2'>
                         <Link to = {'/login'} className='btn btn-primary'>Log In</Link>
                          <Link to = {'/register'} className='btn btn-primary'>New to our website ? Register</Link>


                    </div>:""}

                   <div className= {`${user? "":"hidden"}`} relative >
                    <div className='' onClick = {toggleMenu}>
                         <img className='h-32 w-32 rounded-full relative' src= {userInfo?.photo} alt="" />
                    </div>
                  
                   </div>
                   {
                    showMenu && <div className={`absolute right-2 bg-blue-500 shadow-lg rounded-2xl border border-gray-200 p-4 ${!user?"hidden":" "}`}>
        <div className='flex flex-col gap-2 text-black space-y-4'>
            <Link className=' text-center'>Hi, {userInfo?.name}</Link>
             <Link className='border-b btn text-center' to={'dashboard'}>Your Dashboard</Link>
             <button className="btn border-2" onClick = {logOut}>Logout</button>
             
        </div>

     </div>
                   }
                </div>
                
                </div>

            </nav>
            


            
        </div>
    );
};

export default Navbar;