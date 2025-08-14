import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { MenuIcon, X } from 'lucide-react'
import { useState } from 'react'
import Sidebar from '../Sidebar'
import {SignIn, useUser } from '@clerk/clerk-react' // Assuming Clerk is used for authentication


const Layout = () => {
  const navigate=useNavigate()
  const [sidebar,setSidebar]=useState(false)
  const {user} = useUser(); // Assuming useUser is imported from Clerk or similar auth library
  return user ? (
    <div className="flex flex-col min-h-screen h-screen justify-start items-start">
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200">
        <img src={assets.logo} alt="" className='cursor-pointer'  onClick={() => navigate("/")} />
        {sidebar ? (
          <X
            onClick={() => setSidebar(false)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        ) : (
          <MenuIcon
            onClick={() => setSidebar(true)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        )}
      </nav>

      <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="flex-1 bg-[#F4F7FB]">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen ">
      <SignIn />
    </div>
  );
}

export default Layout
