import React from "react";

const IngredientsList = ({ ingredients }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 pb-2">
        Ingredients
      </h2>
      <ul className="list-none space-y-3">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id={`ingredient-${index}`}
                type="checkbox"
                className="h-4 w-4 text-blue-600 rounded"
              />
            </div>
            <label
              htmlFor={`ingredient-${index}`}
              className="ml-3 text-lg text-gray-700"
            >
              {ingredient}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
