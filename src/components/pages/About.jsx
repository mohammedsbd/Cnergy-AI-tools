import React from "react";

const stats = [
  { label: "Users", value: "1,250" },
  { label: "Requests Today", value: "3,480" },
  { label: "Models Running", value: "7" },
];

export default function AIDashboard() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="p-4 border rounded shadow bg-white text-center"
          >
            <h2 className="text-lg font-semibold">{s.label}</h2>
            <p className="text-2xl">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-6 rounded">
        <h2 className="text-xl font-bold mb-3">System Status</h2>
        <ul className="list-disc pl-6">
          <li>All servers operational</li>
          <li>Latency: 120ms</li>
          <li>Model v2.3 deployed</li>
        </ul>
      </div>
    </div>
  );
}
