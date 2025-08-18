import { useState } from "react";

export default function Community() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const announcements = [
    "🎉 Welcome our 200th member!",
    "📢 Hackathon registration is open!",
    "🚀 New mentorship program launching soon!",
  ];

  const events = [
    { title: "AI Workshop", date: "2025-09-05" },
    { title: "Community Meetup", date: "2025-09-12" },
    { title: "Charity Fundraiser", date: "2025-09-20" },
  ];

  const members = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];

  const subscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "2rem",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>🌍 Community Portal</h1>
        <p>Connect. Learn. Grow together.</p>
      </header>

      <section style={{ marginBottom: "2rem" }}>
        <h2>📢 Announcements</h2>
        <ul>
          {announcements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>📅 Upcoming Events</h2>
        <ul>
          {events.map((e, i) => (
            <li key={i}>
              {e.title} — <strong>{e.date}</strong>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>👥 Members</h2>
        <p>Total members: {members.length}</p>
        <ul>
          {members.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>📧 Newsletter Signup</h2>
        {subscribed ? (
          <p>✅ Thanks for subscribing!</p>
        ) : (
          <form onSubmit={subscribe}>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginRight: "1rem" }}
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </section>

      <footer style={{ textAlign: "center", color: "#666" }}>
        <p>© 2025 Community Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}
