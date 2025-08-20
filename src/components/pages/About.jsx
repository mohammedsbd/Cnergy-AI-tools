import React, { useState } from "react";

function URLShortener() {
  const [url, setUrl] = useState("");
  const [short, setShort] = useState("");

  const shorten = () => {
    if (!url.trim()) return;
    const hash = Math.random().toString(36).substr(2, 6);
    const result = window.location.origin + "/" + hash;
    setShort(result);
  };

  return (
    <div>
      <h2>URL Shortener (Mock)</h2>
      <input
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "80%" }}
      />
      <button onClick={shorten}>Shorten</button>
      {short && (
        <p>
          <strong>Shortened URL:</strong>{" "}
          <a href={short} target="_blank" rel="noopener noreferrer">
            {short}
          </a>
        </p>
      )}
    </div>
  );
}

export default URLShortener;
