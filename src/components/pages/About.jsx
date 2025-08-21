import React from "react";

const TrendingTopics = ({ topics }) => {
  const getFontSize = (count) => {
    // Scale font size based on a topic's count for visual impact
    if (count > 20) return "text-3xl";
    if (count > 15) return "text-2xl";
    if (count > 10) return "text-xl";
    return "text-lg";
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Trending Topics</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {topics.map((topic, index) => (
          <a
            key={index}
            href={`/search?q=${topic.name}`}
            className={`font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 ${getFontSize(
              topic.count
            )}`}
          >
            {topic.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
