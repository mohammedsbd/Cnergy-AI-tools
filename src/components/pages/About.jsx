import React, { useState, useEffect } from "react";

function Pomodoro() {
  const [seconds, setSeconds] = useState(1500); // 25 mins
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  const reset = () => setSeconds(1500);

  const min = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const sec = (seconds % 60).toString().padStart(2, "0");

  return (
    <div>
      <h2>Pomodoro Clock</h2>
      <p style={{ fontSize: "48px" }}>
        {min}:{sec}
      </p>
      <button onClick={() => setRunning((r) => !r)}>
        {running ? "Pause" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Pomodoro;
