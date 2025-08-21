import React, { useState } from "react";

const DynamicFeatureGrid = ({ features }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative bg-white rounded-xl shadow-lg p-8 transition-all duration-300 transform hover:scale-105"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredIndex === index && (
            <div className="absolute inset-0 bg-blue-500 rounded-xl opacity-20 animate-pulse"></div>
          )}
          <div className="text-4xl text-blue-600 mb-4">{feature.icon}</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DynamicFeatureGrid;
