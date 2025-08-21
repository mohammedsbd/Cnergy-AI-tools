import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-500">
            {recipe.cuisine}
          </span>
          <span className="text-sm text-gray-500">{recipe.rating} ★</span>
        </div>
        <a href={recipe.link} className="block">
          <h3 className="text-xl font-bold text-gray-900 leading-tight hover:text-blue-600">
            {recipe.title}
          </h3>
        </a>
        <p className="text-gray-600 text-sm mt-2">{recipe.description}</p>
        <div className="flex items-center text-gray-500 text-xs mt-4">
          <span className="mr-4">⏱️ {recipe.prepTime}</span>
          <span>🍳 {recipe.cookTime}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
