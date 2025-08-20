import React, { useState, useEffect } from "react";

function MemeGenerator() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState({ url: "", top: "", bottom: "" });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((json) => setTemplates(json.data.memes));
  }, []);

  const newMeme = () => {
    const choice = templates[Math.floor(Math.random() * templates.length)];
    setMeme((m) => ({ ...m, url: choice.url }));
  };

  return (
    <div>
      <h2>Meme Generator</h2>
      <button onClick={newMeme}>Random Meme</button>
      {meme.url && (
        <div
          style={{
            position: "relative",
            display: "inline-block",
            textAlign: "center",
            marginTop: "12px",
          }}
        >
          <img src={meme.url} alt="Meme" width="400" />
          <div
            style={{
              position: "absolute",
              top: "8px",
              width: "100%",
              color: "white",
              fontSize: "24px",
              textShadow: "2px 2px black",
            }}
          >
            {meme.top}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "8px",
              width: "100%",
              color: "white",
              fontSize: "24px",
              textShadow: "2px 2px black",
            }}
          >
            {meme.bottom}
          </div>
        </div>
      )}
    </div>
  );
}

export default MemeGenerator;
