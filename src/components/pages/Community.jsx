import React, { useState, useEffect, useCallback, useRef } from "react";

// Utility function to generate a random position for a Mame ball
const getRandomPosition = (containerWidth, containerHeight, size) => {
  return {
    x: Math.random() * (containerWidth - size),
    y: Math.random() * (containerHeight - size),
  };
};

// Mame component - the core animated element
const Mame = React.memo(
  ({ id, size, speed, color, onRemove, containerWidth, containerHeight }) => {
    const [position, setPosition] = useState(
      getRandomPosition(containerWidth, containerHeight, size)
    );
    const [velocity, setVelocity] = useState({
      x: (Math.random() - 0.5) * speed,
      y: (Math.random() - 0.5) * speed,
    });
    const animationRef = useRef();

    const animate = useCallback(() => {
      setPosition((prev) => {
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;

        // Bounce off horizontal walls
        if (newX <= 0 || newX + size >= containerWidth) {
          setVelocity((prevVel) => ({ ...prevVel, x: -prevVel.x }));
          newX = newX <= 0 ? 0 : containerWidth - size;
        }
        // Bounce off vertical walls
        if (newY <= 0 || newY + size >= containerHeight) {
          setVelocity((prevVel) => ({ ...prevVel, y: -prevVel.y }));
          newY = newY <= 0 ? 0 : containerHeight - size;
        }

        // Stop and remove if the user gets bored
        if (Math.random() < 0.0005) {
          onRemove(id);
        }

        return { x: newX, y: newY };
      });

      animationRef.current = requestAnimationFrame(animate);
    }, [velocity, size, containerWidth, containerHeight, onRemove, id, speed]);

    useEffect(() => {
      animationRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationRef.current);
    }, [animate]);

    return (
      <div
        style={{
          position: "absolute",
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          borderRadius: "50%",
          boxShadow: `0 0 10px 5px ${color}`,
          transition: "box-shadow 0.2s linear",
        }}
      />
    );
  }
);

// The main application component to manage the Mame balls
const MameBallGenerator = () => {
  const [mameBalls, setMameBalls] = useState([]);
  const [isGenerating, setIsGenerating] = useState(true);
  const generatorIntervalRef = useRef();
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Update container dimensions on mount and resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize(); // Initial call
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const addMame = useCallback(() => {
    const size = Math.random() * 40 + 20; // Size between 20 and 60
    const newMame = {
      id: Date.now() + Math.random(),
      size: size,
      speed: Math.random() * 2 + 1, // Speed between 1 and 3
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    };
    setMameBalls((prev) => [...prev, newMame]);
  }, []);

  const removeMame = useCallback((idToRemove) => {
    setMameBalls((prev) => prev.filter((m) => m.id !== idToRemove));
  }, []);

  useEffect(() => {
    if (isGenerating) {
      generatorIntervalRef.current = setInterval(addMame, 200);
    } else {
      clearInterval(generatorIntervalRef.current);
    }
    return () => clearInterval(generatorIntervalRef.current);
  }, [isGenerating, addMame]);

  const toggleGeneration = () => {
    setIsGenerating(!isGenerating);
  };

  const clearAllMames = () => {
    setMameBalls([]);
  };

  return (
    <div
      ref={containerRef}
      className="mame-generator-container"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        overflow: "hidden",
        cursor: "crosshair",
      }}
    >
      <div style={{ position: "fixed", top: "20px", left: "20px", zIndex: 10 }}>
        <button
          onClick={toggleGeneration}
          style={{ marginRight: "10px", padding: "10px" }}
        >
          {isGenerating ? "Stop Generating" : "Start Generating"}
        </button>
        <button onClick={clearAllMames} style={{ padding: "10px" }}>
          Clear All
        </button>
      </div>
      {mameBalls.map((mame) => (
        <Mame
          key={mame.id}
          id={mame.id}
          size={mame.size}
          speed={mame.speed}
          color={mame.color}
          onRemove={removeMame}
          containerWidth={containerSize.width}
          containerHeight={containerSize.height}
        />
      ))}
    </div>
  );
};

export default MameBallGenerator;
