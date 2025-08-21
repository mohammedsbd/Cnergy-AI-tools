import React, { useState } from "react";

const ArticleRating = ({ articleId }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isRated, setIsRated] = useState(false);

  const handleRating = (star) => {
    setRating(star);
    setIsRated(true);
    console.log(`User rated article ${articleId} with ${star} stars.`);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg text-center">
      <h4 className="font-semibold text-gray-800 mb-2">Rate this article:</h4>
      <div className="flex justify-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleRating(star)}
            className={`text-2xl cursor-pointer transition-colors duration-200 ${
              (hoverRating || rating) >= star
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
      {isRated && (
        <p className="text-sm text-gray-600 mt-2">Thanks for your feedback!</p>
      )}
    </div>
  );
};

export default ArticleRating;
