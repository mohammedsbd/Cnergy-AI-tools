import React, { useState } from "react";

function FilterableList() {
  const cities = [
    "Paris",
    "London",
    "Tokyo",
    "Nairobi",
    "Addis Ababa",
    "New York",
  ];
  const [query, setQuery] = useState("");

  const filtered = cities.filter((c) =>
    c.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search Cities</h2>
      <input
        placeholder="Search…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.length ? (
          filtered.map((c, i) => <li key={i}>{c}</li>)
        ) : (
          <li>No matches</li>
        )}
      </ul>
    </div>
  );
}

export default FilterableList;
