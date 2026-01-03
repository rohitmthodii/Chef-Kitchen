import React from "react";
import Logo from "../assets/Logo.svg";
import Home from "../assets/Homeicon.svg?react";
import Menu from "../assets/Menuicon.svg?react";
import Favourate from "../assets/Favourateicon.svg?react";
import Mail from "../assets/Mailicon.svg?react";
import Bell from "../assets/Bellicon.svg?react";
import Exit from "../assets/Exiticon.svg?react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden md:fixed md:flex left-0 top-0 h-screen bg-[#1F1D2B] px-6 py-10 rounded-e-xl flex-col justify-between transition-all">
      {/* LOGO */}
      <div className="flex flex-col items-center gap-10">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="w-16" />
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-4 rounded-lg transition-all text-[#F99147] hover:text-white hover:bg-[#F99147]
          ${isActive ? "bg-[#F99147] text-white" : ""}`
          }
        >
          <Home />
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `px-4 py-3 rounded-lg transition-all
       text-[#F99147]
       hover:text-white hover:bg-[#F99147]
       ${isActive ? "bg-[#F99147] text-white" : ""}`
          }
        >
          <Menu />
        </NavLink>

        <NavLink
          to="/favourate"
          className={({ isActive }) =>
            `px-4 py-3 rounded-lg transition-all
      text-[#F99147]
      hover:text-white hover:bg-[#F99147]
     ${isActive ? "bg-[#F99147] text-white" : ""}`
          }
        >
          <Favourate />
        </NavLink>

        <NavLink
          to="/mail"
          className={({ isActive }) =>
            `px-4 py-3 rounded-lg transition-all
     text-[#F99147]
     hover:text-white hover:bg-[#F99147]
     ${isActive ? "bg-[#F99147] text-white" : ""}`
          }
        >
          <Mail />
        </NavLink>

        <NavLink
          to="/bell"
          className={({ isActive }) =>
            `px-4 py-3 rounded-lg transition-all
     text-[#F99147]
     hover:text-white hover:bg-[#F99147]
     ${isActive ? "bg-[#F99147] text-white" : ""}`
          }
        >
          <Bell />
        </NavLink>
      </div>

      {/* LOGOUT */}
      <div className="flex mx-auto">
        <NavLink
          className="text-[#F99147] hover:text-white hover:bg-[#F99147] transition-all px-4 py-3 rounded-lg"
          to="/"
        >
          <Exit />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
