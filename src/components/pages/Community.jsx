import { useState } from "react";

export default function Community() {
  const [activeTab, setActiveTab] = useState("members");

  const members = ["Alice", "Bob", "Charlie", "Diana"];
  const events = [
    { title: "Hackathon", date: "2025-09-01" },
    { title: "Workshop", date: "2025-09-10" },
    { title: "Networking Night", date: "2025-09-15" },
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1>🌍 Community Dashboard</h1>
        <nav style={{ marginTop: "1rem" }}>
          <button onClick={() => setActiveTab("members")}>Members</button>
          <button
            onClick={() => setActiveTab("events")}
            style={{ marginLeft: "1rem" }}
          >
            Events
          </button>
          <button
            onClick={() => setActiveTab("about")}
            style={{ marginLeft: "1rem" }}
          >
            About
          </button>
        </nav>
      </header>

      <main>
        {activeTab === "members" && (
          <section>
            <h2>👥 Members</h2>
            <ul>
              {members.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </section>
        )}
        {activeTab === "events" && (
          <section>
            <h2>📅 Events</h2>
            <ul>
              {events.map((ev, i) => (
                <li key={i}>
                  {ev.title} — {ev.date}
                </li>
              ))}
            </ul>
          </section>
        )}
        {activeTab === "about" && (
          <section>
            <h2>ℹ️ About Us</h2>
            <p>
              Our community is built on collaboration, learning, and growth. We
              organize events, connect members, and support each other.
            </p>
          </section>
        )}
      </main>

      <footer style={{ marginTop: "2rem", textAlign: "center", color: "#666" }}>
        <p>© 2025 Community Project | Built with ❤️</p>
      </footer>
    </div>
  );
}
