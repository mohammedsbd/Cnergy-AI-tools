import React from "react";

const TopStoryBanner = ({ headline, summary, imageUrl, category, link }) => {
  return (
    <div
      className="relative w-full h-96 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
        <div className="p-8 text-white max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide bg-red-600 px-2 py-1 rounded-full">
            {category}
          </span>
          <a href={link} className="block mt-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight hover:underline">
              {headline}
            </h1>
          </a>
          <p className="text-lg mt-2 opacity-90">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default TopStoryBanner;
