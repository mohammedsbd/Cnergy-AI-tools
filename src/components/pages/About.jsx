import React, { useState } from "react";

const faqs = [
  { q: "What is React?", a: "React is a JavaScript library for building UIs." },
  {
    q: "What is JSX?",
    a: "JSX is a syntax extension for JavaScript that resembles HTML.",
  },
  {
    q: "What is a hook?",
    a: "Hooks let you use React state and lifecycle features in function components.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <h2>FAQs</h2>
      {faqs.map((f, i) => (
        <div key={i} style={{ marginBottom: "8px" }}>
          <div
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{ cursor: "pointer", background: "#eee", padding: "8px" }}
          >
            {f.q}
          </div>
          {openIndex === i && (
            <div style={{ padding: "8px", border: "1px solid #ddd" }}>
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQAccordion;
