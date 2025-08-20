import React, { useState } from "react";

function JokeGenerator() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await res.json();
      setJoke(`${data.setup} — ${data.punchline}`);
    } catch {
      setJoke("Oops, something went wrong.");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Random Joke</h2>
      <button onClick={fetchJoke} disabled={loading}>
        {loading ? "Loading..." : "Tell me a joke"}
      </button>
      {joke && <p>{joke}</p>}
    </div>
  );
}

export default JokeGenerator;
