import React, { useState } from "react";

const AdvancedNewsTicker = ({ headlines }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="bg-red-600 text-white py-3 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex whitespace-nowrap ${
          isPaused ? "" : "animate-ticker-continuous"
        }`}
      >
        <span className="bg-red-800 px-4 py-1 text-sm font-bold mr-4">
          BREAKING
        </span>
        {headlines.map((headline, index) => (
          <a
            key={index}
            href={headline.link}
            className="text-sm mr-12 hover:underline"
          >
            {headline.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AdvancedNewsTicker;
