import React from "react";

const TestimonialItem = ({ quote, name, title, avatar }) => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <p className="italic text-lg text-gray-700 mb-4">"{quote}"</p>
      <div className="flex items-center">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
