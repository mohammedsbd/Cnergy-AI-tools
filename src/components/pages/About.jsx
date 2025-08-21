import React from "react";

const SponsoredContentTag = () => {
  return (
    <div className="inline-flex items-center space-x-1 text-xs text-gray-500 font-medium uppercase tracking-wider">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-yellow-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.182v4.545a1 1 0 102 0V8.182a1 1 0 00-1.445-1.014zM10 15a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      <span>Sponsored Content</span>
    </div>
  );
};

export default SponsoredContentTag;
