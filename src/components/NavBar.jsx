import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const NavBar = () => {
  const navigate=useNavigate()
  return (
    <div className="fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 x1:px-32">
      <img
        src={assets.logo}
        alt=""
        className="w-32 sm:w-44"
        onClick={() => navigate("/")}
      />

      <button className="flex items-center gap-2 rounded-full text-sm cursor-pointer  bg-purple-600  text-white px-10 py-2.5">
        Get Started <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export default NavBar
