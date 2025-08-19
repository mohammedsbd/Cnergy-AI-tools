import React from "react";

const images = Array.from(
  { length: 6 },
  (_, i) => `https://picsum.photos/seed/${i}/200/150`
);

export default function Gallery() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Image Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`img-${i}`} className="rounded shadow" />
        ))}
      </div>
    </div>
  );
}
