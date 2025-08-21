import React from "react";

const CompactArticleCard = ({ title, date, link }) => {
  return (
    <div className="p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
      <a href={link} className="block">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug hover:text-blue-600">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{date}</p>
      </a>
    </div>
  );
};

export default CompactArticleCard;
