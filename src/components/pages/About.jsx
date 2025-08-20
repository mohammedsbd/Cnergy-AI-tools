import React, { useState, useEffect } from "react";

function MemoryGame() {
  const cards = ["🍎", "🍌", "🍒", "🍇", "🍉", "🍓"];
  const [deck, setDeck] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const shuffled = [...cards, ...cards]
      .sort(() => 0.5 - Math.random())
      .map((c, i) => ({ id: i, val: c, matched: false }));
    setDeck(shuffled);
  }, []);

  const flip = (card) => {
    if (selected.length === 2) return;
    setSelected((s) => [...s, card]);
    if (selected.length === 1) {
      setTimeout(() => {
        const [a, b] = [selected[0], card];
        if (a.val === b.val) {
          setDeck((d) =>
            d.map((c) => (c.val === a.val ? { ...c, matched: true } : c))
          );
        }
        setSelected([]);
      }, 1000);
    }
  };

  return (
    <div>
      <h2>Memory Game</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "8px",
        }}
      >
        {deck.map((card) => (
          <div
            key={card.id}
            onClick={() => !card.matched && flip(card)}
            style={{
              padding: "16px",
              textAlign: "center",
              background:
                card.matched || selected.includes(card) ? "#fff" : "#888",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            {card.matched || selected.includes(card) ? card.val : "❓"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemoryGame;
