import React from "react";

const FeaturedArticleCard = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
          {article.category}
        </span>
        <a href={article.link} className="block mt-2">
          <h2 className="text-xl font-bold text-gray-900 leading-tight hover:text-blue-600">
            {article.title}
          </h2>
        </a>
        <p className="text-gray-600 text-sm mt-3">{article.excerpt}</p>
        <div className="flex items-center text-gray-500 text-xs mt-4">
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <span>{article.date}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticleCard;
