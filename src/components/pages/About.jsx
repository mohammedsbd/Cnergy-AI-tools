import React, { useState } from "react";

const BreakingNewsAlert = ({ title, link }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-red-600 text-white p-3 flex justify-between items-center animate-fade-in-down">
      <div className="flex items-center">
        <span className="font-bold uppercase text-sm mr-2">Breaking News:</span>
        <a href={link} className="hover:underline">
          {title}
        </a>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="ml-4 text-white hover:text-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default BreakingNewsAlert;
