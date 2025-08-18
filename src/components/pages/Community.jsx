import React, { useState, useEffect, useRef } from "react";

// Utility function to generate a random number within a range
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// A simple star component
const Star = ({ id, x, y, size, opacity, color, onRemove }) => {
  const [currentOpacity, setCurrentOpacity] = useState(opacity);
  const [currentSize, setCurrentSize] = useState(size);
  const animationRef = useRef();

  const animate = () => {
    setCurrentOpacity((prev) => (prev > 0.05 ? prev - 0.01 : 0));
    setCurrentSize((prev) => (prev > 0.5 ? prev - 0.1 : 0));

    if (currentOpacity > 0.05) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      onRemove(id);
    }
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [animate]);

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: `${currentSize}px`,
        height: `${currentSize}px`,
        backgroundColor: color,
        borderRadius: "50%",
        opacity: currentOpacity,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

// Main component: Galaxy Emitter
const GalaxyEmitter = () => {
  const [stars, setStars] = useState([]);
  const containerRef = useRef(null);

  const createStar = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newStar = {
      id: Date.now() + Math.random(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      size: getRandomNumber(1, 4),
      opacity: Math.random() * 0.5 + 0.5,
      color: "white",
    };
    setStars((prevStars) => [...prevStars, newStar]);
  };

  const removeStar = (id) => {
    setStars((prevStars) => prevStars.filter((s) => s.id !== id));
  };

  return (
    <div
      ref={containerRef}
      className="galaxy-container"
      onMouseMove={createStar}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2em",
          textAlign: "center",
          paddingTop: "20px",
          opacity: 0.8,
        }}
      >
        🌌 Move your mouse to see a galaxy! 💫
      </div>
      {stars.map((s) => (
        <Star
          key={s.id}
          id={s.id}
          x={s.x}
          y={s.y}
          size={s.size}
          opacity={s.opacity}
          color={s.color}
          onRemove={removeStar}
        />
      ))}
    </div>
  );
};

export default GalaxyEmitter;
