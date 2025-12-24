import React from 'react'
import Logo from '../assets/Logo.svg'
import Home from '../assets/Homeicon.svg'
import Menu from '../assets/Menuicon.svg'
import Favourate from '../assets/Favourateicon.svg'
import Mail from '../assets/Mailicon.svg'
import Bell from '../assets/Bellicon.svg'
import Exit from '../assets/Exiticon.svg'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  
  return (
    <div className="hidden md:fixed md:flex left-0 top-0 h-screen bg-[#1F1D2B] px-6 py-10 rounded-e-xl flex-col justify-between transition-all">

      {/* LOGO */}
      <div className="flex flex-col items-center gap-16">
          <img src={Logo} alt="Logo" className="w-16" />

        {/* NAVIGATION */}
        <div className="flex flex-col gap-14">
          <Link><img src={Home} alt="" /></Link>
          
          <Link><img src={Menu} alt="" /></Link>
          
          <Link><img src={Favourate} alt="" /></Link>
          
          <Link><img src={Mail} alt="" /></Link>
          
          <Link><img src={Bell} alt="" /></Link>
        </div>
      </div>

      {/* LOGOUT */}
      <div className='flex mx-auto'>
        <img src={Exit} alt="" />
      </div>
    </div>
  )
}

export default Sidebar