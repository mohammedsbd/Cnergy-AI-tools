import React, { useState } from "react";

export default function Stepper() {
  const steps = ["Info", "Details", "Confirm"];
  const [current, setCurrent] = useState(0);

  return (
    <div className="max-w-md mx-auto mt-6">
      <div className="flex justify-between mb-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`flex-1 text-center ${i <= current ? "font-bold" : ""}`}
          >
            {step}
          </div>
        ))}
      </div>
      <p>
        Step {current + 1} of {steps.length}
      </p>
      <div className="mt-4 space-x-2">
        <button
          disabled={current === 0}
          onClick={() => setCurrent(current - 1)}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Back
        </button>
        <button
          disabled={current === steps.length - 1}
          onClick={() => setCurrent(current + 1)}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
