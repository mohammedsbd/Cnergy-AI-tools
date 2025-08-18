import React, { useState, useEffect, useRef } from "react";

// Utility function to generate a random quote
const getRandomQuote = async () => {
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "The journey of a thousand miles begins with a single step.",
      author: "Lao Tzu",
    },
    {
      text: "That which does not kill us makes us stronger.",
      author: "Friedrich Nietzsche",
    },
    {
      text: "The only thing necessary for the triumph of evil is for good men to do nothing.",
      author: "Edmund Burke",
    },
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return new Promise((resolve) => {
    setTimeout(() => resolve(quotes[randomIndex]), 500);
  });
};

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fade, setFade] = useState(false);

  const fetchNewQuote = async () => {
    setFade(true);
    setLoading(true);
    const newQuote = await getRandomQuote();

    setTimeout(() => {
      setQuote(newQuote);
      setLoading(false);
      setFade(false);
    }, 500);
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <div className="quote-container">
      <div className={`quote-box ${fade ? "fade-out" : "fade-in"}`}>
        {loading ? (
          <div className="loading-message">Loading a new quote...</div>
        ) : (
          quote && (
            <>
              <p className="quote-text">"{quote.text}"</p>
              <footer className="quote-author">- {quote.author}</footer>
            </>
          )
        )}
      </div>
      <button
        onClick={fetchNewQuote}
        className="new-quote-btn"
        disabled={loading}
      >
        {loading ? "..." : "Get New Quote"}
      </button>

      <style jsx>{`
        .quote-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          text-align: center;
          padding: 20px;
          background-color: #f4f7f9;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .quote-box {
          width: 80%;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          transition: opacity 0.5s ease-in-out;
        }
        .fade-in {
          opacity: 1;
        }
        .fade-out {
          opacity: 0;
        }
        .loading-message {
          font-style: italic;
          color: #888;
        }
        .quote-text {
          font-size: 1.8rem;
          font-style: italic;
          color: #333;
          margin-bottom: 20px;
        }
        .quote-author {
          font-size: 1.2rem;
          color: #555;
        }
        .new-quote-btn {
          padding: 12px 24px;
          font-size: 1rem;
          font-weight: bold;
          color: #fff;
          background-color: #007bff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top: 20px;
        }
        .new-quote-btn:hover {
          background-color: #0056b3;
        }
        .new-quote-btn:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default QuoteGenerator;
