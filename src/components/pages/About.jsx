import React, { useState } from "react";

const NewsPoll = ({ question, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleVote = (optionIndex) => {
    setSelectedOption(optionIndex);
    // Simulate updating vote counts
    setTimeout(() => setShowResults(true), 500);
  };

  const totalVotes = options.reduce((sum, opt) => sum + (opt.votes || 0), 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{question}</h3>
      <div className="space-y-4">
        {options.map((option, index) => (
          <div key={index}>
            <button
              onClick={() => handleVote(index)}
              disabled={showResults}
              className={`w-full text-left p-4 rounded-lg border transition duration-300 ${
                selectedOption === index
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"
              }`}
            >
              {option.text}
            </button>
            {showResults && (
              <div className="mt-2 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{
                    width: `${(option.votes / totalVotes) * 100 || 0}%`,
                  }}
                ></div>
                <span className="text-xs text-gray-600 mt-1 block">
                  {option.votes} votes (
                  {((option.votes / totalVotes) * 100).toFixed(1)}%)
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPoll;
