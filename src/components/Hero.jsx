import React from "react";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative w-full">
      {/* Hero Image */}
      <img
        src={heroImg}
        alt="Laptop and plant"
        className="w-full h-auto object-cover"
      />

      {/* Gradient Rectangle */}
      <div
        className="bg-gradient-to-r from-teal-400 to-sky-500 p-4 sm:p-6 md:p-8 flex flex-col justify-center w-full lg:absolute lg:w-[540px] xl:w-[622px] lg:left-[60px] lg:top-130 lg:transform lg:-translate-y-1/2 lg:rounded-none lg:shadow-lg"
        style={{}}
      >
        <h1 className="text-white text-lg sm:text-[36px] md:text-[48px] lg:text-[36px] font-bold leading-snug">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        
        <button
          className="mt-5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded"
          style={{
            width: "214px",
            height: "38px",
          }}
        >
          GET FREE CONSULTATION
        </button>
      </div>
    </section>
  );
};

export default Hero;
