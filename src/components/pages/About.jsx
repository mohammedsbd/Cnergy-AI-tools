import React from "react";

const models = [
  { name: "GPT-4", speed: "Fast", accuracy: "92%" },
  { name: "BERT", speed: "Medium", accuracy: "89%" },
  { name: "LLaMA", speed: "Variable", accuracy: "87%" },
];

export default function AIModelComparison() {
  return (
    <div className="overflow-x-auto p-6">
      <h1 className="text-2xl font-bold mb-4">AI Model Comparison</h1>
      <table className="w-full border-collapse border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Model</th>
            <th className="border p-2">Speed</th>
            <th className="border p-2">Accuracy</th>
          </tr>
        </thead>
        <tbody>
          {models.map((m, i) => (
            <tr key={i} className="text-center">
              <td className="border p-2">{m.name}</td>
              <td className="border p-2">{m.speed}</td>
              <td className="border p-2">{m.accuracy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
