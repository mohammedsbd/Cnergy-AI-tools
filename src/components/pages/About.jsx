import React, { useState } from "react";

const songs = ["Song A", "Song B", "Song C"];

export default function MusicPlayer() {
  const [current, setCurrent] = useState(null);

  return (
    <div className="max-w-sm mx-auto mt-6 p-4 border rounded">
      <h2 className="text-xl font-bold mb-3">Music Player</h2>
      <ul className="space-y-2">
        {songs.map((song, i) => (
          <li
            key={i}
            className={`cursor-pointer ${
              current === song ? "font-bold text-blue-600" : ""
            }`}
            onClick={() => setCurrent(song)}
          >
            {song}
          </li>
        ))}
      </ul>
      {current && <p className="mt-4">Now Playing: {current}</p>}
    </div>
  );
}
