import React, { useState, useEffect } from "react";

function CounterLogger() {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState([]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setCount((c) => {
        const next = c + 1;
        setLog((l) => [...l, next]);
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  const reset = () => {
    setRunning(false);
    setCount(0);
    setLog([]);
  };

  return (
    <div>
      <h2>Counter Logger</h2>
      <p>Count: {count}</p>
      <p>Status: {running ? "Running" : "Stopped"}</p>
      <button onClick={() => setRunning((r) => !r)}>
        {running ? "Pause" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
      <h3>Log</h3>
      <ul>
        {log.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>
    </div>
  );
}

export default CounterLogger;
