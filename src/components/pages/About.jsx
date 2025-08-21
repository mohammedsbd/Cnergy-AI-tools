import React from "react";

const RecipeInstructions = ({ instructions }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 pb-2">
        Instructions
      </h2>
      <ol className="list-decimal list-outside space-y-6 ml-6">
        {instructions.map((step, index) => (
          <li key={index}>
            <p className="text-lg text-gray-700 leading-relaxed">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeInstructions;
