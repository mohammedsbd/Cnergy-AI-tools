import React from "react";

const LivePollResults = ({ question, options, totalVotes }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{question}</h3>
      <div className="space-y-4">
        {options.map((option, index) => {
          const percentage =
            totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
          return (
            <div key={index}>
              <div className="flex justify-between items-center text-gray-800 font-semibold">
                <span>{option.text}</span>
                <span>{percentage.toFixed(1)}%</span>
              </div>
              <div className="mt-2 bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-sm text-gray-500 mt-4">Total votes: {totalVotes}</p>
    </div>
  );
};

export default LivePollResults;
