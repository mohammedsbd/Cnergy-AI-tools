import React, { useState } from "react";

function ImageSlider({ images }) {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div>
      <img
        src={images[idx]}
        alt={`Slide ${idx}`}
        style={{ width: "100%", maxHeight: "300px" }}
      />
      <div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}

function SliderApp() {
  const imgs = [
    "https://via.placeholder.com/400x200/111",
    "https://via.placeholder.com/400x200/222",
    "https://via.placeholder.com/400x200/333",
  ];

  return (
    <div>
      <h2>Image Slider</h2>
      <ImageSlider images={imgs} />
    </div>
  );
}

export default SliderApp;
