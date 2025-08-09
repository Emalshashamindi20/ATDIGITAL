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
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center text-indigo-500 mb-8">
        Frequently asked questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg p-5 ${openIndex === index ? "bg-indigo-50" : "bg-white"} cursor-pointer`}
          >
            {/* Question Row */}
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <h3
                className={`text-base font-semibold ${openIndex === index ? "text-indigo-500" : "text-black"}`}
              >
                {faq.question}
              </h3>
              <span className="text-2xl text-indigo-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
