import React, { useState, useEffect, useRef } from "react";

// Utility function to generate a random hex color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Component for a single colored block
const ColorBlock = React.memo(({ color, size, duration }) => {
  const [position, setPosition] = useState({
    x: Math.random() * (window.innerWidth - size),
    y: Math.random() * (window.innerHeight - size),
  });

  const blockStyle = {
    position: "absolute",
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    transition: `transform ${duration}s ease-in-out`,
    transform: `translate(0, 0)`,
  };

  useEffect(() => {
    // This effect handles the animation
    const animate = () => {
      const newX = Math.random() * (window.innerWidth - size);
      const newY = Math.random() * (window.innerHeight - size);

      setPosition({ x: newX, y: newY });
    };

    const interval = setInterval(animate, duration * 1000);
    return () => clearInterval(interval);
  }, [size, duration]);

  return <div style={blockStyle} />;
});

// Main component to generate and manage the blocks
const DynamicColorGrid = () => {
  const [blocks, setBlocks] = useState([]);
  const [columns, setColumns] = useState(10);
  const [rows, setRows] = useState(10);

  const containerRef = useRef(null);

  useEffect(() => {
    const generateBlocks = () => {
      const newBlocks = [];
      const totalBlocks = columns * rows;
      const blockSize = Math.min(
        containerRef.current.clientWidth / columns - 2,
        containerRef.current.clientHeight / rows - 2
      );

      for (let i = 0; i < totalBlocks; i++) {
        newBlocks.push({
          id: `block-${i}`,
          color: getRandomColor(),
          size: blockSize,
          duration: Math.random() * 3 + 1, // 1 to 4 seconds
        });
      }
      setBlocks(newBlocks);
    };

    const handleResize = () => {
      if (containerRef.current) {
        generateBlocks();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [columns, rows]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#1a1a1a",
        display: "flex",
        flexWrap: "wrap",
        overflow: "hidden",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{ color: "white", position: "absolute", top: "10%", zIndex: 10 }}
      >
        Dynamic Color Blocks
      </h1>
      <div style={{ position: "absolute", bottom: "10%", zIndex: 10 }}>
        <button onClick={() => setColumns((c) => (c > 5 ? c - 1 : 5))}>
          Fewer Columns
        </button>
        <button onClick={() => setColumns((c) => (c < 20 ? c + 1 : 20))}>
          More Columns
        </button>
      </div>
      {blocks.map((block) => (
        <ColorBlock
          key={block.id}
          color={block.color}
          size={block.size}
          duration={block.duration}
        />
      ))}
    </div>
  );
};

export default DynamicColorGrid;
