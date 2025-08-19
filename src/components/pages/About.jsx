import React, { useState } from "react";

const items = ["Apple", "Banana", "Cherry", "Mango", "Grapes", "Orange"];

export default function SearchFilter() {
  const [query, setQuery] = useState("");

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-3">Search Fruits</h1>
      <input
        type="text"
        placeholder="Type to search..."
        className="border px-2 py-1 w-full mb-3"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map((item, i) => (
          <li key={i} className="py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
