import React, { useState, useEffect, useRef } from "react";

// Utility function to generate a random HSL color
const getRandomHsl = () => `hsl(${Math.random() * 360}, 70%, 50%)`;

// A single floating square component
const FloatingSquare = React.memo(
  ({ id, size, speed, direction, color, onRemove }) => {
    const [position, setPosition] = useState({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    });
    const [rotation, setRotation] = useState(0);
    const animationRef = useRef();

    const moveSquare = () => {
      setPosition((prev) => {
        let newX = prev.x + direction.x * speed;
        let newY = prev.y + direction.y * speed;

        // Bounce off walls
        if (newX + size > window.innerWidth || newX < 0) {
          direction.x *= -1;
          newX = prev.x + direction.x * speed;
        }
        if (newY + size > window.innerHeight || newY < 0) {
          direction.y *= -1;
          newY = prev.y + direction.y * speed;
        }

        return { x: newX, y: newY };
      });

      setRotation((prev) => (prev + 0.5) % 360);

      // Stop and remove if the user gets bored
      if (Math.random() < 0.0005) {
        onRemove(id);
      }

      animationRef.current = requestAnimationFrame(moveSquare);
    };

    useEffect(() => {
      animationRef.current = requestAnimationFrame(moveSquare);
      return () => cancelAnimationFrame(animationRef.current);
    }, [direction, speed, size, onRemove]);

    return (
      <div
        style={{
          position: "absolute",
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.1s linear",
        }}
      />
    );
  }
);

// The main component to manage all the squares
const FloatingSquareGenerator = () => {
  const [squares, setSquares] = useState([]);
  const [isGenerating, setIsGenerating] = useState(true);
  const generatorIntervalRef = useRef();

  const addSquare = () => {
    const newSquare = {
      id: Date.now() + Math.random(),
      size: Math.random() * 50 + 20,
      speed: Math.random() * 1.5 + 0.5,
      direction: {
        x: Math.random() > 0.5 ? 1 : -1,
        y: Math.random() > 0.5 ? 1 : -1,
      },
      color: getRandomHsl(),
    };
    setSquares((prev) => [...prev, newSquare]);
  };

  const removeSquare = (idToRemove) => {
    setSquares((prev) => prev.filter((sq) => sq.id !== idToRemove));
  };

  useEffect(() => {
    if (isGenerating) {
      generatorIntervalRef.current = setInterval(addSquare, 500);
    } else {
      clearInterval(generatorIntervalRef.current);
    }

    return () => clearInterval(generatorIntervalRef.current);
  }, [isGenerating]);

  const toggleGeneration = () => {
    setIsGenerating(!isGenerating);
  };

  const clearAllSquares = () => {
    setSquares([]);
  };

  return (
    <div
      className="floating-square-container"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#333",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "fixed", top: "10px", left: "10px", zIndex: 10 }}>
        <button
          onClick={toggleGeneration}
          style={{ marginRight: "10px", padding: "10px" }}
        >
          {isGenerating ? "Stop Generating" : "Start Generating"}
        </button>
        <button onClick={clearAllSquares} style={{ padding: "10px" }}>
          Clear All
        </button>
      </div>
      {squares.map((sq) => (
        <FloatingSquare
          key={sq.id}
          id={sq.id}
          size={sq.size}
          speed={sq.speed}
          direction={sq.direction}
          color={sq.color}
          onRemove={removeSquare}
        />
      ))}
    </div>
  );
};

export default FloatingSquareGenerator;
