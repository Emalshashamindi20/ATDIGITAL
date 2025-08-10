import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ConsultationPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Top Button */}
      <div className="flex justify-center py-8">
        <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-semibold">
          GET FREE CONSULTATION
        </button>
      </div>

      {/* Consultation Box */}
      <div className="max-w-3xl mx-auto p-6 border border-dashed border-purple-400 my-6">
        <div
          className="cursor-pointer flex justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-lg font-semibold">
            What is Webflow and why is it the best website builder?
          </h2>
          <span className="text-2xl">{isOpen ? "−" : "+"}</span>
        </div>

        {isOpen && (
          <div className="mt-4">
            <p className="text-blue-600 font-semibold">
              What is Webflow and why is it the best website builder?
            </p>
            <p className="mt-2 text-gray-600">
              Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.
              Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus 
              accumsan tortor posuere.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ConsultationPage;
