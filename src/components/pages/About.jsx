import React, { useState } from "react";

const CounterHistory = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const updateCount = (delta) => {
    const newCount = count + delta;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  return (
    <div style={styles.container}>
      <h2>Counter</h2>
      <div style={styles.counter}>{count}</div>
      <div style={styles.buttons}>
        <button onClick={() => updateCount(1)}>Increment</button>
        <button onClick={() => updateCount(-1)}>Decrement</button>
      </div>
      <h3>History</h3>
      <ul style={styles.history}>
        {history.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  counter: {
    fontSize: "40px",
    margin: "20px 0",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  history: {
    textAlign: "left",
    marginTop: "20px",
  },
};

export default CounterHistory;
