import React, { useState } from "react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className="bg-[#4F46E5] w-full z-50">
      <div className="max-w-[1440px] h-[102px] mx-auto flex items-center justify-between px-[80px] py-[26px]">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="AT Digital Logo" className="w-56 h-12 object-contain" />
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-[28px] text-white text-[14px] font-medium">
          <li><a href="#services" className="hover:underline cursor-pointer">SERVICES</a></li>
          <li><a href="#about" className="hover:underline cursor-pointer">ABOUT US</a></li>
          <li><a href="#contact" className="hover:underline cursor-pointer">CONTACT US</a></li>
          <li><a href="#careers" className="hover:underline cursor-pointer">CAREERS</a></li>
        </ul>
        
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-white focus:outline-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 text-[#100C08] text-sm font-medium bg-white w-full h-screen pb-4">
          <li><a href="#services" className="hover:underline cursor-pointer" onClick={()=>setMenuOpen(false)}>SERVICES</a></li>
          <li><a href="#about" className="hover:underline cursor-pointer" onClick={()=>setMenuOpen(false)}>ABOUT US</a></li>
          <li><a href="#contact" className="hover:underline cursor-pointer" onClick={()=>setMenuOpen(false)}>CONTACT US</a></li>
          <li><a href="#careers" className="hover:underline cursor-pointer" onClick={()=>setMenuOpen(false)}>CAREERS</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
