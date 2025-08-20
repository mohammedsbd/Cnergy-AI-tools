import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [target, setTarget] = useState("");
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (!target) return;
    const interval = setInterval(() => {
      const distance = new Date(target) - new Date();
      if (distance <= 0) {
        setTimeLeft("Time's up!");
        clearInterval(interval);
      } else {
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const m = Math.floor((distance / (1000 * 60)) % 60);
        const s = Math.floor((distance / 1000) % 60);
        setTimeLeft(`${d}d ${h}h ${m}m ${s}s`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <input
        type="datetime-local"
        onChange={(e) => setTarget(e.target.value)}
      />
      {timeLeft && <p>Time left: {timeLeft}</p>}
    </div>
  );
}

export default CountdownTimer;
