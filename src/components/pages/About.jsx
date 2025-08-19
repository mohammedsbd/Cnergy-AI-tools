import React, { useState } from "react";

export default function AIImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);

  const generateImage = () => {
    if (!prompt.trim()) return;
    setImage("https://placehold.co/300x200?text=AI+Image+Generated");
  };

  return (
    <div className="p-4 max-w-lg mx-auto border rounded shadow">
      <h1 className="text-xl font-bold mb-3">AI Image Generator</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full border p-2 rounded mb-3"
        placeholder="Describe an image..."
      />
      <button
        onClick={generateImage}
        className="bg-blue-600 text-white px-3 py-1 rounded"
      >
        Generate
      </button>
      {image && (
        <div className="mt-4">
          <img src={image} alt="AI result" className="rounded shadow" />
        </div>
      )}
    </div>
  );
}
