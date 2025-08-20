import React, { useState } from "react";

function DiceRoller() {
  const [dice, setDice] = useState([1, 1]);

  const roll = () => {
    setDice([
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ]);
  };

  return (
    <div>
      <h2>Dice Roller</h2>
      <div style={{ fontSize: "64px" }}>
        <span>🎲{dice[0]}</span> <span>🎲{dice[1]}</span>
      </div>
      <button onClick={roll}>Roll</button>
    </div>
  );
}

export default DiceRoller;
