import React, { useState } from "react";

const quotes = [
  "The journey of a thousand miles begins with one step.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Happiness depends upon ourselves.",
  "Do one thing every day that scares you.",
  "In the middle of every difficulty lies opportunity.",
];

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(quotes[0]);

  const newQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-4 border rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-3">Random Quote</h2>
      <p className="italic mb-4">"{quote}"</p>
      <button
        onClick={newQuote}
        className="bg-blue-600 text-white px-3 py-1 rounded"
      >
        Get New Quote
      </button>
    </div>
  );
}
