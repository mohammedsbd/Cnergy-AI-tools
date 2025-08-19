import React from "react";

const papers = [
  { title: "Transformers in Vision", year: 2023, link: "#" },
  { title: "Reinforcement Learning Advances", year: 2024, link: "#" },
  { title: "Neural Symbolic AI", year: 2025, link: "#" },
];

export default function AIResearchPapers() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Latest AI Research Papers</h1>
        <p className="text-gray-600">
          Browse recent publications in artificial intelligence.
        </p>
      </header>
      <ul className="space-y-3">
        {papers.map((p, i) => (
          <li
            key={i}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div>
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <span className="text-sm text-gray-500">Published: {p.year}</span>
            </div>
            <a href={p.link} className="text-blue-600 hover:underline">
              Download
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
