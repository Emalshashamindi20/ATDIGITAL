import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ConsultationPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Button */}
      <div className="py-10" style={{ marginLeft: "77px" }}>
        <button
          className="text-white font-semibold"
          style={{
            backgroundColor: "#F28D35",
            padding: "10px 20px",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        >
          GET FREE CONSULTATION
        </button>
      </div>

      {/* FAQ Frame */}
      <div
        style={{
          width: "801px",
          marginLeft: "77px",
          borderRadius: "5px",
          border: "1px dashed #A259FF",
          padding: "20px",
          marginBottom: "40px",
          transition: "all 0.3s ease", // smooth height change
        }}
        className="flex flex-col justify-start"
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="cursor-pointer flex flex-col"
            onClick={() => toggleItem(index)}
            style={{ marginBottom: index !== faqs.length - 1 ? "20px" : "0" }}
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h2
                className={`text-lg font-semibold ${
                  openIndex === index ? "text-blue-600" : "text-gray-900"
                }`}
              >
                {faq.question}
              </h2>
              <span
                className="text-2xl select-none"
                style={{ color: "#4B5563" }}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <p className="mt-2 text-gray-500 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default ConsultationPage;
