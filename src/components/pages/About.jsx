import React, { useState } from "react";

function ChatBot() {
  const [history, setHistory] = useState([]);

  const ask = () => {
    const input = prompt("Say something:");
    if (!input) return;
    let res = "I didn't get that.";
    if (input.toLowerCase().includes("hi")) res = "Hello!";
    if (input.toLowerCase().includes("weather"))
      res = "I am not a weather app, sorry!";
    setHistory((h) => [...h, { you: input, bot: res }]);
  };

  return (
    <div>
      <h2>Simple Chat Bot</h2>
      <button onClick={ask}>Talk to Bot</button>
      <ul>
        {history.map((h, i) => (
          <li key={i}>
            <strong>You:</strong> {h.you}
            <br />
            <strong>Bot:</strong> {h.bot}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatBot;
