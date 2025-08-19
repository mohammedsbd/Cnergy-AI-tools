import React, { useState } from "react";

const faqs = [
  { q: "What is React?", a: "A JavaScript library for building UIs." },
  { q: "What is JSX?", a: "A syntax extension for JavaScript." },
  {
    q: "What are hooks?",
    a: "Functions that let you use state and lifecycle features.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="max-w-md mx-auto mt-6">
      <h1 className="text-xl font-bold mb-3">FAQs</h1>
      {faqs.map((item, i) => (
        <div key={i} className="border rounded mb-2">
          <button
            onClick={() => toggle(i)}
            className="w-full text-left px-3 py-2 font-semibold"
          >
            {item.q}
          </button>
          {openIndex === i && (
            <div className="px-3 py-2 text-gray-700">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
