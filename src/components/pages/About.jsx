import React from "react";

const NewsTicker = ({ headlines }) => {
  return (
    <div className="bg-gray-900 text-white py-2 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        <span className="bg-red-600 px-4 py-1 text-sm font-bold mr-4">
          BREAKING NEWS
        </span>
        {headlines.map((headline, index) => (
          <a
            key={index}
            href={headline.link}
            className="text-sm mr-8 hover:underline"
          >
            {headline.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
