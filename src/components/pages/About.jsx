import React, { useState } from "react";

function LyricsFinder() {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchLyrics = async () => {
    if (!artist || !title) return;
    setLoading(true);
    try {
      const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      const data = await res.json();
      setLyrics(data.lyrics || "No lyrics found.");
    } catch {
      setLyrics("Error fetching lyrics.");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Lyrics Finder</h2>
      <input
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={fetchLyrics} disabled={loading || !artist || !title}>
        {loading ? "Searching..." : "Fetch Lyrics"}
      </button>
      {lyrics && <pre style={{ marginTop: "12px" }}>{lyrics}</pre>}
    </div>
  );
}

export default LyricsFinder;
