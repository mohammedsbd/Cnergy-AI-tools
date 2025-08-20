import React, { useState } from "react";

function Star({ filled, onClick }) {
  return (
    <span
      style={{ cursor: "pointer", color: filled ? "gold" : "gray" }}
      onClick={onClick}
    >
      ★
    </span>
  );
}

function StarRating({ totalStars = 5 }) {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h2>Rate:</h2>
      <div>
        {[...Array(totalStars)].map((_, i) => (
          <Star key={i} filled={i < rating} onClick={() => setRating(i + 1)} />
        ))}
      </div>
      {rating > 0 && (
        <p>
          Your rating: {rating} star{rating > 1 ? "s" : ""}
        </p>
      )}
    </div>
  );
}

export default StarRating;
