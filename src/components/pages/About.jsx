import React from "react";

const useCases = [
  {
    title: "Content Generation",
    desc: "Create blogs, ads, and product descriptions instantly.",
  },
  {
    title: "Customer Support",
    desc: "Automated 24/7 AI chatbots with natural responses.",
  },
  {
    title: "Data Analysis",
    desc: "Summarize large datasets with clear insights.",
  },
];

export default function AIUseCases() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">AI Use Cases</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {useCases.map((u, i) => (
          <div
            key={i}
            className="p-4 border rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-2">{u.title}</h2>
            <p>{u.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
