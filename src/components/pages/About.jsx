import React, { useState } from "react";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculate = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      const val = (w / (h * h)).toFixed(1);
      setBmi(val);
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <input
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={calculate}>Calculate</button>
      {bmi && <p>Your BMI is {bmi}</p>}
    </div>
  );
}

export default BMI;
