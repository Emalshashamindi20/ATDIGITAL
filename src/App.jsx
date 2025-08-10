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
        <div id="about"></div>
        <div id="contact"><FAQ /></div>
        <div id="careers"><Footer /></div>
      </main>
    </>
  );
}

export default App;
