import React, { useState } from "react";

const quotes = [
  "Artificial intelligence is the new electricity.",
  "The future belongs to those who harness AI.",
  "Machine learning is intelligence applied.",
];

export default function AIQuoteGenerator() {
  const [quote, setQuote] = useState(quotes[0]);

  const generate = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-64">
      <blockquote className="italic text-lg mb-4">“{quote}”</blockquote>
      <button
        onClick={generate}
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        New Quote
      </button>
    </div>
  );
}
