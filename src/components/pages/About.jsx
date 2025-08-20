import React, { useState, useEffect } from "react";

function NewYearCountdown() {
  const calculate = () => {
    const now = new Date();
    const next = new Date(now.getFullYear() + 1, 0, 1);
    const diff = next - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    return `${days}d ${hrs}h ${mins}m ${secs}s`;
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const id = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h2>Countdown to New Year</h2>
      <p style={{ fontSize: "24px" }}>{time}</p>
    </div>
  );
}

export default NewYearCountdown;
