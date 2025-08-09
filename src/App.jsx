import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div id="services"><Services /></div>
        <div id="about"><section className="max-w-6xl mx-auto px-4 py-16"><h2 className="text-2xl font-bold text-indigo-600 mb-4">About Us</h2><p className="text-gray-700 max-w-2xl">We are a digital agency focused on helping businesses grow through technology and strategy. Our team is passionate about delivering results and building long-term partnerships.</p></section></div>
        <div id="contact"><FAQ /></div>
        <div id="careers"><Footer /></div>
      </main>
    </>
  );
}

export default App;
