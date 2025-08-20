import React, { useState, useEffect } from "react";

function RealTimeClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h2>Real-Time Clock</h2>
      <p style={{ fontSize: "48px", fontFamily: "monospace" }}>
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default RealTimeClock;
