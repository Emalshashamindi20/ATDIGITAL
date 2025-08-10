import React, { useState } from "react";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-[27px] font-bold text-center mb-8" style={{ color: "#4F46E5" }}>
        Frequently asked questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-lg p-5 cursor-pointer mx-auto overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: '#FAF8FF',
                width: 846,
                height: isOpen ? 149 : 76,
                maxWidth: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
              onClick={() => toggleFAQ(index)}
            >
              {/* Question Row */}
              <div className="flex justify-between items-center">
                <h3
                  className={`text-base font-semibold ${
                    isOpen ? "text-[#4F46E5]" : "text-black"
                  }`}
                >
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl font-medium ${
                    isOpen ? "text-[#4F46E5]" : "text-black"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {/* Answer */}
              {isOpen && (
                <p className="mt-2 text-sm" style={{ color: "#52525B" }}>
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
