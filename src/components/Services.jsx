import React from "react";
import leftImage from "../assets/image1.png";   
import rightImage from "../assets/image2.png"; 

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-32">
      {/* First service */}
      <div className="flex flex-col md:flex-row items-center gap-50">
        <img
          src={rightImage}
          alt="Web Development"
          className="w-72 lg:w-[414px] lg:h-[414px] md:w-72 ml-0 md:ml-8 lg:ml-16 xl:ml-24"
        />
        <div>
          <h2 className="font-bold text-[27px]" style={{ color: '#4F46E5' }}>
            Web &amp; Mobile App Development
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed max-w-xl" style={{ color: '#000000' }}>
            Your web and mobile Apps are pieces of the puzzle to grow 
            your business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <button className="mt-5 text-white px-4 py-2 font-semibold cursor-pointer" style={{ backgroundColor: '#F28D35', borderRadius: '4px', fontSize: '14px' }}>
            Learn More
          </button>
        </div>
      </div>

      {/* Second service */}
  <div className="flex flex-col md:flex-row-reverse items-center gap-50 mt-10">
        <img
          src={leftImage}
          alt="Digital Strategy"
          className="w-72 lg:w-[414px] lg:h-[414px] md:w-72 ml-0 md:ml-8 lg:ml-16 xl:ml-24"
        />
        <div>
          <h2 className="font-bold text-[27px]" style={{ color: '#4F46E5' }}>
            Digital Strategy Consulting
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed max-w-lg" style={{ color: '#000000' }}>
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <button className="mt-5 text-white px-4 py-2 font-semibold cursor-pointer" style={{ backgroundColor: '#F28D35', borderRadius: '4px', fontSize: '14px' }}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
