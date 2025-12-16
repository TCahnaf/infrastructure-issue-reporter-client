import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { BsWindowSidebar } from 'react-icons/bs';
import useAuth from '../hooks/useAuth';
import useCitizenInfo from '../hooks/useCitizenInfo';
import DashStats from '../pages/Dashboard/DashStats';



const Dashboard = () => {

    const {user} = useAuth();
    const userInfo = useCitizenInfo();
    
    return (
      <div className="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full bg-base-300">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
        {/* Sidebar toggle icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
      </label>
      <div className="px-4">Welcome, {userInfo?.name} </div>
    </nav>

    {/* <h1>Your Dash Stats</h1>
    <DashStats></DashStats> */}





 <div className='p-8'>  <Outlet></Outlet></div>
  
   
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-32 is-drawer-open:w-64">

      

      {/* Sidebar content here */}
      <ul className="menu w-full grow p-8 flex flex-col items-center gap-8">
        {/* List item */}
        <li>
          <Link to = "/" className=" border-b is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
            {/* Home icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            
            <span className="is-drawer-close:hidden ">Homepage</span>
          </Link>
        </li>



        {/* Links for users */}

         <li>
            <Link className='border-b font-bold text-center' to = "/dashboard">Your Dashboard!!!</Link>
            
        </li>



        <li>
            <Link className='border-b font-bold text-center' to = "/dashboard/create-issue">Report An Issue !!!</Link>
            
        </li>


         <li>
            <Link className='border-b font-bold text-center' to = "/dashboard/my-issues">Manage your issues</Link>
            
        </li>

        <li>
            <Link className='border-b font-bold text-center' to = "/dashboard/profile-page">view your profile</Link>
            
        </li>


        {/* Links for admin */}

          <li>

           <Link className='border-b font-bold text-center' to = "/dashboard/all-issues">Manage All Issues</Link>

        </li>



        <li>

           <Link className='border-b font-bold text-center' to = "/dashboard/manage-staff">Manage Staff</Link>


        </li>

           <li>

           <Link className='border-b font-bold text-center' to = "/dashboard/manage-users">Manage Users</Link>


        </li>



      </ul>
    </div>
  </div>
</div>
    );
};

export default Dashboard;