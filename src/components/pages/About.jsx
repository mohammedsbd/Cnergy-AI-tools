import React, { useState } from "react";

const SubscriptionModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full text-center relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
        <div className="text-6xl mb-4">⭐</div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          Unlock Unlimited News.
        </h3>
        <p className="text-gray-600 mb-6">
          Subscribe now to get unlimited access to all articles, exclusive
          analysis, and an ad-free experience.
        </p>
        <button
          onClick={() => alert("Redirecting to subscription page...")}
          className="w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Start Your Free Trial
        </button>
      </div>
    </div>
  );
};

export default SubscriptionModal;
