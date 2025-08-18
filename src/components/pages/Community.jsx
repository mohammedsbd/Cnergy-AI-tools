import { useState } from "react";

export default function Community() {
  const [role, setRole] = useState("all");

  const members = [
    { name: "Alice", role: "Admin" },
    { name: "Bob", role: "Member" },
    { name: "Charlie", role: "Moderator" },
  ];

  const filtered =
    role === "all" ? members : members.filter((m) => m.role === role);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>👥 Community Members</h1>
      <label>
        Filter:{" "}
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="all">All</option>
          <option value="Admin">Admin</option>
          <option value="Member">Member</option>
          <option value="Moderator">Moderator</option>
        </select>
      </label>
      <ul>
        {filtered.map((m, i) => (
          <li key={i}>
            {m.name} — {m.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
