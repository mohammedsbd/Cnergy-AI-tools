import React, { useState } from "react";

const images = [
  "https://picsum.photos/id/1011/400/200",
  "https://picsum.photos/id/1015/400/200",
  "https://picsum.photos/id/1016/400/200",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="relative w-96 h-52 overflow-hidden border rounded-lg">
        <img
          src={images[index]}
          alt="carousel"
          className="w-full h-full object-cover"
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 bg-white px-2 rounded shadow"
        >
          {"<"}
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 bg-white px-2 rounded shadow"
        >
          {">"}
        </button>
      </div>
      <div className="flex gap-2 mt-3">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
