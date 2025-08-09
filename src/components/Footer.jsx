import React from "react";
import Logo from "../assets/Logo.png"; // path to your logo

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section */}
        <div>
          <img src={Logo} alt="AT Digital Logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed max-w-xs">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>

        {/* Our Technologies */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Technologies</h3>
          <ul className="space-y-2 text-sm">
              <li className="cursor-pointer">ReactJS</li>
              <li className="cursor-pointer">Gatsby</li>
              <li className="cursor-pointer">NextJS</li>
              <li className="cursor-pointer">NodeJS</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
              <li className="cursor-pointer">Social Media Marketing</li>
              <li className="cursor-pointer">Web &amp; Mobile App Development</li>
              <li className="cursor-pointer">Data &amp; Analytics</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/50 mt-6">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 text-sm cursor-pointer">
            <div className="flex gap-3">
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
