import React, { useState } from "react";

function QuoteGenerator() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote({ text: data.content, author: data.author });
    } catch {
      setQuote({ text: "Could not fetch quote.", author: "" });
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Random Quote</h2>
      <button onClick={fetchQuote} disabled={loading}>
        {loading ? "Loading..." : "Get Quote"}
      </button>
      {quote.text && (
        <blockquote>
          “{quote.text}” <footer>— {quote.author}</footer>
        </blockquote>
      )}
    </div>
  );
}

export default QuoteGenerator;
