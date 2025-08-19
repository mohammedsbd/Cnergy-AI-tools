import React, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  const reset = () => {
    setSeconds(0);
    setRunning(false);
  };

  return (
    <div className="flex flex-col items-center mt-6 space-y-3">
      <h1 className="text-xl font-bold">Timer</h1>
      <div className="text-3xl font-mono">{seconds}s</div>
      <div className="space-x-2">
        <button
          onClick={() => setRunning(true)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Start
        </button>
        <button
          onClick={() => setRunning(false)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Pause
        </button>
        <button
          onClick={reset}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
