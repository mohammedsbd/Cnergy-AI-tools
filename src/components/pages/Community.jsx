import React, { useState, useEffect, useCallback, useRef } from "react";

const Particle = React.memo(({ id, x, y, color, size, velocity, onRemove }) => {
  const [position, setPosition] = useState({ x, y });
  const [currentSize, setCurrentSize] = useState(size);
  const animationFrameRef = useRef();

  const animate = useCallback(() => {
    setPosition((prev) => ({
      x: prev.x + velocity.x,
      y: prev.y + velocity.y,
    }));
    setCurrentSize((prev) => (prev > 0.1 ? prev - 0.1 : 0));

    if (currentSize > 0.1) {
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      onRemove(id);
    }
  }, [id, velocity, onRemove, currentSize]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [animate]);

  return (
    <div
      style={{
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: `${currentSize}px`,
        height: `${currentSize}px`,
        backgroundColor: color,
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
});

const ParticleSystem = () => {
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  const createParticle = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newParticle = {
      id: Date.now() + Math.random(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      size: Math.random() * 20 + 10,
      velocity: {
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4,
      },
    };
    setParticles((prev) => [...prev, newParticle]);
  }, []);

  const removeParticle = useCallback((idToRemove) => {
    setParticles((prev) => prev.filter((p) => p.id !== idToRemove));
  }, []);

  useEffect(() => {
    const handleMouseLeave = () => {
      setParticles([]);
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseleave", handleMouseLeave);
      return () =>
        container.removeEventListener("mouseleave", handleMouseLeave);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="particle-system-container"
      onMouseMove={createParticle}
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
        }}
      >
        Move your mouse here!
      </div>
      {particles.map((p) => (
        <Particle
          key={p.id}
          id={p.id}
          x={p.x}
          y={p.y}
          color={p.color}
          size={p.size}
          velocity={p.velocity}
          onRemove={removeParticle}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;
