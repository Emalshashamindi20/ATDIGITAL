import React, { useState } from "react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className="bg-[#4F46E5] w-full z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-8 md:px-[40px] lg:px-[80px] py-4 md:py-[26px] h-[72px] md:h-[102px] relative">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="AT Digital Logo" className="w-32 h-8 sm:w-40 sm:h-10 md:w-56 md:h-12 object-contain" />
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4 sm:gap-6 md:gap-[28px] text-white text-[13px] sm:text-[14px] font-medium">
          <li><a href="#services" className="hover:underline cursor-pointer">SERVICES</a></li>
          <li><a href="#about" className="hover:underline cursor-pointer">ABOUT US</a></li>
          <li><a href="#contact" className="hover:underline cursor-pointer">CONTACT US</a></li>
          <li><a href="#careers" className="hover:underline cursor-pointer">CAREERS</a></li>
        </ul>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-white focus:outline-none cursor-pointer absolute top-6 right-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-[31px] h-[24px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col" style={{minHeight:'100vh'}}>
          {/* X Icon */}
          <button
            className="absolute top-6 right-8 text-black focus:outline-none cursor-pointer"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-[31px] h-[24px]" fill="none" stroke="#000" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* Menu Links */}
          <nav className="flex-1 flex flex-col pl-8 pt-12 gap-[36px]">
            <a href="#home" className="text-black text-[14px] font-medium cursor-pointer" onClick={()=>setMenuOpen(false)}>HOME</a>
            <a href="#services" className="text-black text-[14px] font-medium cursor-pointer" onClick={()=>setMenuOpen(false)}>SERVICES</a>
            <a href="#about" className="text-black text-[14px] font-medium cursor-pointer" onClick={()=>setMenuOpen(false)}>ABOUT US</a>
            <a href="#contact" className="text-black text-[14px] font-medium cursor-pointer" onClick={()=>setMenuOpen(false)}>CONTACT US</a>
            <a href="#careers" className="text-black text-[14px] font-medium cursor-pointer" onClick={()=>setMenuOpen(false)}>CAREERS</a>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
