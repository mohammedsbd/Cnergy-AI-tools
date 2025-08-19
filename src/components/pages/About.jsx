import React from "react";

const data = [
  { id: 1, name: "Alice", age: 24, role: "Developer" },
  { id: 2, name: "Bob", age: 30, role: "Designer" },
  { id: 3, name: "Charlie", age: 28, role: "Manager" },
];

export default function DataTable() {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-3">Team Members</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Age</th>
            <th className="border px-2 py-1">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td className="border px-2 py-1">{d.id}</td>
              <td className="border px-2 py-1">{d.name}</td>
              <td className="border px-2 py-1">{d.age}</td>
              <td className="border px-2 py-1">{d.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
