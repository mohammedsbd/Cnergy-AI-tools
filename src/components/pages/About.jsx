import React from "react";

const PricingCard = ({ planName, price, features }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 text-center border-t-4 border-blue-600">
      <h3 className="text-2xl font-bold mb-2">{planName}</h3>
      <p className="text-5xl font-extrabold text-blue-600 mb-6">
        ${price}
        <span className="text-xl font-normal text-gray-500">/mo</span>
      </p>
      <ul className="text-left mb-8 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300">
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
