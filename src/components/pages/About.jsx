import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center mt-6 space-y-4">
      <h1 className="text-2xl font-bold">Counter App</h1>
      <div className="text-4xl font-mono">{count}</div>
      <div className="space-x-3">
        <button
          onClick={increment}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          -
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-3 py-1 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
