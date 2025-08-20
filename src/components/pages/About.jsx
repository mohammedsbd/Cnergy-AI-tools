import React, { useState } from "react";

const sample = [
  { q: "Capital of France?", a: "Paris" },
  { q: "2 + 2?", a: "4" },
  { q: "JS abbreviation?", a: "JavaScript" },
];

function FlashcardQuiz() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const next = () => {
    setShow(false);
    setIndex((i) => (i + 1) % sample.length);
  };

  return (
    <div>
      <h2>Flashcard Quiz</h2>
      <div style={{ border: "1px solid #ccc", padding: "16px" }}>
        <p>{sample[index].q}</p>
        {show && (
          <p>
            <strong>{sample[index].a}</strong>
          </p>
        )}
        <button onClick={() => setShow((s) => !s)}>
          {show ? "Hide Answer" : "Show Answer"}
        </button>
      </div>
      <button onClick={next}>Next</button>
    </div>
  );
}

export default FlashcardQuiz;
