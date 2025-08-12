import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { MenuIcon, X } from 'lucide-react'


const Layout = () => {
  const navigate=useNavigate()
  const [sidebar,setSidebar]=useState(false)
  return (
    <div className="flex flex-col min-h-screen h-screen justify-start items-start">
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200">
        <img src={assets.logo} alt="" onClick={() => navigate("/")} />
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
      <Outlet />
    </div>
  );
}

export default Layout
