import React, { useState } from 'react';
import Logo from './Logo';
import { Link, NavLink } from 'react-router';
import Dashboard from '../layouts/Dashboard';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const {user, logOut} = useAuth();
     const [showMenu, setShowMenu] = useState(false)


     const toggleMenu = () => {
        setShowMenu(prev => !prev)

     }

     
     
     
  


    return (

        <div>
            <nav className='bg-amber-400 w-full mx-auto hover:bg-amber-600 '>

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

                       <NavLink to={"/contact"}>
                        Contact Us     
                    </NavLink>
                    
                </div>

                <div>
                    {!user? <div className='flex items-center justify-center gap-2'>
                         <Link to = {'/login'} className='btn btn-primary'>Log In</Link>
                          <Link to = {'/register'} className='btn btn-primary'>New to our website ? Register</Link>


                    </div>:""}

                   <div className= {`${user?"":"hidden"}`} relative >
                    <div className='' onClick = {toggleMenu}>
                         <img className='h-14 w-14 rounded-full relative' src= {user?.photoURL} alt="" />
                    </div>
                  
                   </div>
                   {
                    showMenu && <div className={`absolute right-2 bg-white shadow-lg rounded-2xl border border-gray-200 p-4 ${!user?"hidden":" "}`}>
        <div className='flex flex-col gap-2'>
            <Link className=''>Hi, {user?.displayName}</Link>
             <Link to={'dashboard'}>Your Dashboard</Link>
             <button className="btn" onClick = {logOut}>Logout</button>
             
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