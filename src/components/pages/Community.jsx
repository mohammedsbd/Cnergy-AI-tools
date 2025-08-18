import React, { useState, useEffect } from "react";

const colors = [
  "#FF6347",
  "#4682B4",
  "#32CD32",
  "#FFD700",
  "#BA55D3",
  "#00CED1",
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const MovingBox = ({ id, onRemove }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [color, setColor] = useState(getRandomColor());
  const [speed] = useState(Math.random() * 2 + 1); // Random speed between 1 and 3

  useEffect(() => {
    const moveBox = () => {
      setPosition((prev) => {
        const newLeft = prev.left + speed;
        if (newLeft > window.innerWidth) {
          onRemove(id);
        }
        return { top: prev.top, left: newLeft };
      });
    };

    const interval = setInterval(moveBox, 20); // Move every 20ms

    return () => clearInterval(interval);
  }, [speed, id, onRemove]);

  return (
    <div
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: "50px",
        height: "50px",
        backgroundColor: color,
        border: "2px solid black",
        borderRadius: "8px",
      }}
    />
  );
};

const BoxGenerator = () => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const createBox = () => {
      const newBox = {
        id: Date.now() + Math.random(),
        initialPosition: {
          top: Math.random() * (window.innerHeight - 50),
          left: -50, // Start off-screen to the left
        },
      };
      setBoxes((prev) => [...prev, newBox]);
    };

    const interval = setInterval(createBox, 1000); // Create a new box every second

    return () => clearInterval(interval);
  }, []);

  const handleRemoveBox = (idToRemove) => {
    setBoxes((prev) => prev.filter((box) => box.id !== idToRemove));
  };

  return (
    <div
      className="box-container"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <h1>Random Box Generator</h1>
      {boxes.map((box) => (
        <MovingBox key={box.id} id={box.id} onRemove={handleRemoveBox} />
      ))}
    </div>
  );
};

export default BoxGenerator;
