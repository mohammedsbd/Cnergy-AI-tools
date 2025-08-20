import React, { useState, useEffect } from "react";

function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [debounced, setDebounced] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(query), 500);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (!debounced) {
      setSuggestions([]);
      return;
    }
    fetch(
      `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${debounced}`
    )
      .then((res) => res.json())
      .then((data) => setSuggestions(data[1]))
      .catch(() => setSuggestions([]));
  }, [debounced]);

  return (
    <div>
      <h2>Wikipedia Search</h2>
      <input
        placeholder="Search Wikipedia..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%" }}
      />
      <ul>
        {suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default DebouncedSearch;
