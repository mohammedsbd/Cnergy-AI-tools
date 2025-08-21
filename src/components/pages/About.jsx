import React, { useState, useEffect } from "react";

const AnimatedValueProps = ({ propositions }) => {
  const [currentProp, setCurrentProp] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProp((prevProp) => (prevProp + 1) % propositions.length);
    }, 5000); // Change proposition every 5 seconds
    return () => clearInterval(interval);
  }, [propositions.length]);

  return (
    <div className="text-center p-8 bg-blue-600 text-white rounded-lg shadow-lg">
      <p className="text-xl md:text-2xl font-light mb-2">Our AI helps you</p>
      <h3 className="text-3xl md:text-4xl font-extrabold h-12 overflow-hidden relative">
        <span
          className="absolute transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateY(-${currentProp * 100}%)` }}
        >
          {propositions.map((prop, index) => (
            <div key={index} className="h-12 flex items-center justify-center">
              {prop}
            </div>
          ))}
        </span>
      </h3>
    </div>
  );
};

export default AnimatedValueProps;
