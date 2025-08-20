import React, { useState } from "react";

function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [lang, setLang] = useState("es");

  const translate = () => {
    fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        text
      )}&langpair=en|${lang}`
    )
      .then((res) => res.json())
      .then((data) => setTranslated(data.responseData.translatedText));
  };

  return (
    <div>
      <h2>Language Translator</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        placeholder="Enter text in English..."
        style={{ width: "100%" }}
      />
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </select>
      <button onClick={translate}>Translate</button>
      {translated && <p>Translation: {translated}</p>}
    </div>
  );
}

export default Translator;
