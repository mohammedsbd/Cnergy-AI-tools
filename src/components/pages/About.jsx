import React, { useState } from "react";

function DomainGenerator() {
  const [word, setWord] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const generate = () => {
    if (!word.trim()) return;
    const ext = [".com", ".net", ".io", ".dev"];
    setSuggestions(ext.map((e) => word.trim().toLowerCase() + e));
  };

  return (
    <div>
      <h2>Domain Suggestions</h2>
      <input
        placeholder="Enter base word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={generate}>Generate</button>
      <ul>
        {suggestions.map((d, i) => (
          <li key={i}>
            <a href={`http://${d}`} target="_blank" rel="noopener noreferrer">
              {d}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DomainGenerator;
