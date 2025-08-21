import React from "react";

const CategoryHeader = ({ title, description, imageUrl }) => {
  return (
    <div
      className="relative w-full h-80 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-8 text-center text-white">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
          <p className="text-lg md:text-xl font-light opacity-90">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
