import React, { useState } from 'react';
import Logo from './Logo';
import { Link, NavLink } from 'react-router';
import Dashboard from '../layouts/Dashboard';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const {user} = useAuth();
     const [showMenu, setShowMenu] = useState(false)


     const toggleMenu = () => {
        setShowMenu(prev => !prev)

     }

     const menu = <>
     <div className='absolute bg-white shadow-lg rounded-2xl border border-gray-200 p-4'>
        <div className='flex flex-col gap-2'>
            <Link className=''>Username</Link>
             <Link to={'dashboard'}>Your Dashboard</Link>
              <Link>Logout</Link>
        </div>

     </div>
     
     </>


    return (

        <div>
            <nav className='bg-amber-400 w-full mx-auto hover:bg-amber-600 relative'>

                <div className='flex border-4  items-center justify-between shadow-md p-4'>

                <div>
                    <Logo></Logo>
                </div>

                <div className='flex border-2 gap-5  p-5 rounded-2xl hover:bg-teal-400'>
                    <NavLink to={"/"}>
                    Home

                    </NavLink>
                      <NavLink to={"/issues"}>
                        Issues     
                    </NavLink>
                       <NavLink to={"/issues"}>
                        About     
                    </NavLink>

                       <NavLink to={"/issues"}>
                        Contact Us     
                    </NavLink>
                    
                </div>

                <div>
                    {!user? <div className='flex items-center justify-center gap-2'>
                         <Link to = {'/login'} className='btn btn-primary'>Log In</Link>
                          <Link to = {'/register'} className='btn btn-primary'>New to our website ? Register</Link>


                    </div>:""}

                   <div className= {`${user?"":"hidden"}`} onClick = {toggleMenu}>
                    <Logo></Logo>
                   </div>
                   {
                    showMenu && menu
                   }
                </div>
                
                </div>

            </nav>
            


            
        </div>
    );
};

export default Navbar;