import React, { useState, useEffect } from "react";

const text = "The quick brown fox jumps over the lazy dog.";

function TypingTest() {
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started || timeLeft <= 0) return;

    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [started, timeLeft]);

  const wpm = (input.trim().split(/\s+/).length / 1).toFixed(1);

  return (
    <div>
      <h2>Typing Speed Test</h2>
      <p>{text}</p>
      <textarea
        rows={4}
        style={{ width: "100%" }}
        value={input}
        disabled={timeLeft <= 0}
        onFocus={() => !started && setStarted(true)}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Time Left: {timeLeft}s</p>
      <p>Words per minute: {timeLeft <= 0 ? wpm : "—"}</p>
    </div>
  );
}

export default TypingTest;
