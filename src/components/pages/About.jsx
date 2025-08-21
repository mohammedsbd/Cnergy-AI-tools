import React from "react";

const CaseStudyCard = ({ title, description, tags, companyLogo }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <img
            src={companyLogo}
            alt="Company Logo"
            className="h-10 object-contain"
          />
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
