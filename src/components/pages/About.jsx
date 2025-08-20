import React, { useState, useEffect } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [rates, setRates] = useState({});
  const [base, setBase] = useState("USD");
  const [target, setTarget] = useState("EUR");

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => setRates(data.rates))
      .catch(() => setRates({}));
  }, []);

  const converted = rates[target]
    ? ((amount * rates[target]) / rates[base]).toFixed(4)
    : "—";

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={base} onChange={(e) => setBase(e.target.value)}>
        {Object.keys(rates).map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      →
      <select value={target} onChange={(e) => setTarget(e.target.value)}>
        {Object.keys(rates).map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <p>Converted: {converted}</p>
    </div>
  );
}

export default CurrencyConverter;
