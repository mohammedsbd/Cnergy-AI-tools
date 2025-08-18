import { useState } from "react";

export default function Community() {
  const quotes = [
    "Alone we can do so little; together we can do so much.",
    "Community is strength.",
    "We rise by lifting others.",
  ];
  const [index, setIndex] = useState(0);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Community Quotes</h1>
      <blockquote>{quotes[index]}</blockquote>
      <button onClick={() => setIndex((index + 1) % quotes.length)}>
        Next Quote
      </button>
    </div>
  );
}
