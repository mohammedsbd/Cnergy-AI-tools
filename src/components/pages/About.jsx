import React, { useState } from "react";

function ExpenseSplitter() {
  const [names, setNames] = useState("");
  const [total, setTotal] = useState("");
  const [result, setResult] = useState(null);

  const split = () => {
    const people = names
      .split(",")
      .map((n) => n.trim())
      .filter((n) => n);
    const amount = parseFloat(total);
    if (!people.length || isNaN(amount)) return;
    const share = (amount / people.length).toFixed(2);
    const resObj = {};
    people.forEach((n) => {
      resObj[n] = share;
    });
    setResult(resObj);
  };

  return (
    <div>
      <h2>Expense Splitter</h2>
      <p>Enter names separated by commas and total amount.</p>
      <input
        placeholder="Names: Alice, Bob..."
        value={names}
        onChange={(e) => setNames(e.target.value)}
        style={{ width: "100%" }}
      />
      <input
        placeholder="Total amount"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      />
      <button onClick={split}>Split</button>
      {result && (
        <ul>
          {Object.entries(result).map(([name, amt]) => (
            <li key={name}>
              {name}: {amt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseSplitter;
