import React, { useState, useEffect } from "react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomShape = () => {
  const shapes = ["square", "circle", "triangle", "pentagon"];
  return shapes[getRandomNumber(shapes.length)];
};

const RandomComponent = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      // Simulate API call
      setTimeout(() => {
        const newItems = [];
        for (let i = 0; i < 10; i++) {
          newItems.push({
            id: i,
            color: getRandomColor(),
            size: getRandomNumber(100) + 20,
            shape: getRandomShape(),
            position: {
              top: getRandomNumber(80) + "%",
              left: getRandomNumber(80) + "%",
            },
          });
        }
        setItems(newItems);
        setLoading(false);
      }, 1500);
    };

    fetchItems();
  }, []);

  if (loading) {
    return <div className="loading">Loading random stuff...</div>;
  }

  return (
    <div className="random-container">
      {items.map((item) => (
        <div
          key={item.id}
          className={`random-item ${item.shape}`}
          style={{
            backgroundColor: item.color,
            width: item.size,
            height: item.size,
            top: item.position.top,
            left: item.position.left,
          }}
        />
      ))}
    </div>
  );
};

export default RandomComponent;
