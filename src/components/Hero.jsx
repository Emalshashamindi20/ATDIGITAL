
import React from "react";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Laptop and plant"
        className="w-full h-full object-cover object-center absolute top-0 left-0 z-0"
      />
      {/* Gradient rectangle with text */}
      <div className="relative z-10 w-full max-w-[95vw] sm:max-w-[500px] bg-gradient-to-r from-teal-400 to-sky-500 p-4 sm:p-8 rounded-none sm:rounded shadow-lg mx-2 sm:mx-0">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
  <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-5 py-2 font-semibold rounded w-full sm:w-auto cursor-pointer">
          GET FREE CONSULTATION
        </button>
      </div>
    </section>
  );
};

export default Hero;
