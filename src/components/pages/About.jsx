import React from "react";

const NutritionTable = ({ nutrition }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 pb-2">
        Nutritional Information
      </h2>
      <ul className="text-gray-700 space-y-2">
        {Object.entries(nutrition).map(([key, value]) => (
          <li
            key={key}
            className="flex justify-between border-b border-gray-200 pb-2"
          >
            <span className="font-semibold capitalize">{key}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-500 mt-4">
        *Approximate values per serving.
      </p>
    </div>
  );
};

export default NutritionTable;
