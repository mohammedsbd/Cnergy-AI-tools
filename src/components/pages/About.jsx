import React, { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex flex-col items-center mt-6 space-y-3">
      <h2 className="text-lg font-semibold">Rate Us</h2>
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={`text-3xl ${
              star <= rating ? "text-yellow-400" : "text-gray-400"
            }`}
          >
            ★
          </button>
        ))}
      </div>
      <p>Your rating: {rating} / 5</p>
    </div>
  );
}
