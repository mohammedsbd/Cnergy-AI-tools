import React, { useState, useEffect, useRef } from "react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Particle = ({ x, y, color, size, lifespan, onComplete }) => {
  const [currentLifespan, setCurrentLifespan] = useState(lifespan);
  const particleRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, lifespan * 1000); // Convert lifespan in seconds to milliseconds

    return () => clearTimeout(timer);
  }, [lifespan, onComplete]);

  useEffect(() => {
    const fadeInterval = setInterval(() => {
      setCurrentLifespan((prev) => prev - 0.1);
    }, 100);

    return () => clearInterval(fadeInterval);
  }, []);

  const opacity = currentLifespan / lifespan;

  return (
    <div
      ref={particleRef}
      className="particle"
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: "50%",
        opacity: opacity,
        transform: `translate(-50%, -50%)`,
        transition: "opacity 0.5s linear",
      }}
    />
  );
};

const ParticleEmitter = () => {
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  const createParticle = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newParticle = {
      id: Date.now() + Math.random(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      color: getRandomColor(),
      size: Math.random() * 10 + 5,
      lifespan: Math.random() * 3 + 1, // 1 to 4 seconds
    };
    setParticles((prevParticles) => [...prevParticles, newParticle]);
  };

  const removeParticle = (id) => {
    setParticles((prevParticles) => prevParticles.filter((p) => p.id !== id));
  };

  return (
    <div
      ref={containerRef}
      className="particle-container"
      onClick={createParticle}
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        backgroundColor: "#1a1a1a",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <h3 style={{ color: "white", textAlign: "center", paddingTop: "20px" }}>
        Click anywhere to create a particle!
      </h3>
      {particles.map((p) => (
        <Particle
          key={p.id}
          x={p.x}
          y={p.y}
          color={p.color}
          size={p.size}
          lifespan={p.lifespan}
          onComplete={() => removeParticle(p.id)}
        />
      ))}
    </div>
  );
};

export default ParticleEmitter;
