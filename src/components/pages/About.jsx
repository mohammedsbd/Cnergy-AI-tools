import React, { useState, useEffect } from "react";

export default function Countdown() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="text-xl font-bold">Countdown Timer</h1>
      <p className="text-4xl font-mono mt-3">{time}</p>
      {time === 0 && <p className="mt-2 text-red-500">Time’s up!</p>}
    </div>
  );
}
