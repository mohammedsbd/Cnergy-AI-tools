import { useState } from "react";

export default function Community() {
  const [filter, setFilter] = useState("all");

  const events = [
    { title: "Hackathon", date: "2025-09-01", type: "tech" },
    { title: "Beach Cleanup", date: "2025-09-10", type: "environment" },
    { title: "Networking Meetup", date: "2025-09-15", type: "social" },
  ];

  const filtered =
    filter === "all" ? events : events.filter((e) => e.type === filter);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📅 Community Events</h1>

      <div>
        <label>Filter by type: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="tech">Tech</option>
          <option value="environment">Environment</option>
          <option value="social">Social</option>
        </select>
      </div>

      <table border="1" cellPadding="6" style={{ marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ev, i) => (
            <tr key={i}>
              <td>{ev.title}</td>
              <td>{ev.date}</td>
              <td>{ev.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
