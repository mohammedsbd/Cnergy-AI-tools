import React from "react";

const RecipeHero = ({ title, imageUrl, prepTime, cookTime, servings }) => {
  return (
    <div
      className="relative w-full h-[60vh] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-8">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {title}
          </h1>
          <div className="flex justify-center items-center text-lg space-x-6">
            <span className="flex items-center">
              <span className="mr-2 text-2xl">⏱️</span> Prep: {prepTime}
            </span>
            <span className="flex items-center">
              <span className="mr-2 text-2xl">🍳</span> Cook: {cookTime}
            </span>
            <span className="flex items-center">
              <span className="mr-2 text-2xl">🍽️</span> Servings: {servings}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeHero;
