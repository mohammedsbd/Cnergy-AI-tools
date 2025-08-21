import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white text-center py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          Unleash the Power of AI
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-80">
          Transform your business with intelligent automation and data-driven
          insights.
        </p>
        <a
          href="#services"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
