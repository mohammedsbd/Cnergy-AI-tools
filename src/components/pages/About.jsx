import React, { useState } from "react";

const ServiceTabs = ({ services }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex border-b border-gray-200 mb-6">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 text-center py-4 px-6 font-semibold transition-colors duration-300 ${
              activeTab === index
                ? "border-b-4 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {services[activeTab].title}
        </h3>
        <p className="text-gray-600">{services[activeTab].description}</p>
      </div>
    </div>
  );
};

export default ServiceTabs;
