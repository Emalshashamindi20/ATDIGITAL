import React from "react";
import Logo from "../assets/Logo.png"; // path to your logo

const Footer = () => {
  return (
    <footer className="bg-[#4F46E5] text-white">
      {/* Top Section */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 pt-10 pb-5 grid grid-cols-1 md:grid-cols-3 gap-8 h-auto lg:h-[266px]">
        
        {/* Left Section */}
        <div>
          <img
            src={Logo}
            alt="AT Digital Logo"
            className="w-[180px] sm:w-[200px] lg:w-[226px] h-auto mb-4"
          />
          <p className="text-sm sm:text-base leading-relaxed max-w-xs">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective — your
            business results.
          </p>
        </div>

        {/* Our Technologies */}
        <div>
          <h3 className="font-semibold text-lg sm:text-xl mb-4">Our Technologies</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="cursor-pointer">ReactJS</li>
            <li className="cursor-pointer">Gatsby</li>
            <li className="cursor-pointer">NextJS</li>
            <li className="cursor-pointer">NodeJS</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-semibold text-lg sm:text-xl mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="cursor-pointer">Social Media Marketing</li>
            <li className="cursor-pointer">Web &amp; Mobile App Development</li>
            <li className="cursor-pointer">Data &amp; Analytics</li>
            <li className="cursor-pointer">Google Marketing Solutions</li>
            <li className="cursor-pointer">Search Engine Optimization</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-center mt-6 px-4 sm:px-0">
        <div className="w-full sm:w-[500px] md:w-[39.375rem] border-t border-white/50 flex justify-center py-4 text-xs sm:text-sm cursor-pointer">
          <div className="flex gap-3 flex-wrap justify-center">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
