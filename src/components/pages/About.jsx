import React, { useState } from "react";

const RecipeReview = ({ onReviewSubmit }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || reviewText.trim() === "") {
      alert("Please provide a rating and a review.");
      return;
    }
    onReviewSubmit({
      rating,
      reviewText,
      name,
      date: new Date().toLocaleDateString(),
    });
    setRating(0);
    setReviewText("");
    setName("");
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Leave a Review</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-md"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Your Rating
          </label>
          <div className="flex space-x-1 text-3xl">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer transition-colors duration-200 ${
                  rating >= star ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Your Review
          </label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows="4"
            className="w-full p-3 border rounded-md"
            placeholder="Tell us what you think of this recipe..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default RecipeReview;
