import React, { useState } from "react";

function SearchList() {
  const items = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape"];
  const [query, setQuery] = useState("");

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search List</h2>
      <input
        type="text"
        placeholder="Search…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
        {filtered.length === 0 && <li>No results found.</li>}
      </ul>
    </div>
  );
}

export default SearchList;
