import React, { useState, useEffect } from "react";

const Card = ({ title, description, image, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`card-container ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="card-front">
        <img src={image} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-back">
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const FlashcardApp = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching flashcard data from an API
    const fetchFlashcards = async () => {
      setTimeout(() => {
        const data = [
          {
            id: 1,
            title: "React",
            description: "A JavaScript library for building user interfaces.",
            image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=React",
          },
          {
            id: 2,
            title: "JSX",
            description:
              "A syntax extension for JavaScript, used with React to describe UI.",
            image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=JSX",
          },
          {
            id: 3,
            title: "State",
            description:
              "An object that holds some information about the component.",
            image: "https://via.placeholder.com/150/00FF00/FFFFFF?text=State",
          },
          {
            id: 4,
            title: "Props",
            description:
              "Short for properties; used to pass data from a parent to a child component.",
            image: "https://via.placeholder.com/150/FFFF00/000000?text=Props",
          },
        ];
        setFlashcards(data);
        setLoading(false);
      }, 1500);
    };

    fetchFlashcards();
  }, []);

  if (loading) {
    return <div className="loading-message">Loading flashcards...</div>;
  }

  return (
    <div className="flashcard-deck">
      <h2>React Flashcards</h2>
      <div className="card-grid">
        {flashcards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashcardApp;
