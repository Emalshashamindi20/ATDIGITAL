import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ConsultationPage from "./Pages/ConsultationPage.jsx";




function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <main>
                <Hero />
                <div id="services"><Services /></div>
                <div id="contact"><FAQ /></div>
                <div id="careers"><Footer /></div>
              </main>
            </>
          }
        />
        <Route path="/consultation" element={<ConsultationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
