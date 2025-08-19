import React, { useState, useEffect } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress(progress + 10), 500);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Loading...</h1>
      <div className="w-full bg-gray-200 rounded h-6 overflow-hidden">
        <div
          style={{ width: `${progress}%` }}
          className="bg-green-500 h-6 transition-all"
        ></div>
      </div>
      <p className="mt-2">{progress}%</p>
    </div>
  );
}
