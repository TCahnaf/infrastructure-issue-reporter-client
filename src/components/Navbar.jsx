import React from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <nav className='bg-amber-400 w-full mx-auto hover:bg-amber-600'>

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
                    <button className='btn btn-primary rounded-2xl'>Login</button>
                </div>
                </div>

            </nav>
            


            
        </div>
    );
};

export default Navbar;