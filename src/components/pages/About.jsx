import React from "react";

const CTABanner = () => {
  return (
    <div className="bg-blue-600 text-white py-12 px-4 text-center rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-2">
        Ready to Transform Your Business?
      </h2>
      <p className="text-lg mb-6 opacity-90">
        Start your free trial today and discover the future with AI.
      </p>
      <a
        href="/signup"
        className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 hover:bg-gray-100"
      >
        Start Free Trial
      </a>
    </div>
  );
};

export default CTABanner;
