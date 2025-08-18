import { useState } from "react";

export default function Community() {
  const [members, setMembers] = useState(["Alice", "Bob"]);
  const [newMember, setNewMember] = useState("");
  const [isMember, setIsMember] = useState(false);

  const addMember = (e) => {
    e.preventDefault();
    if (newMember.trim()) {
      setMembers([...members, newMember]);
      setNewMember("");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1>🌍 Community Hub</h1>
        {isMember ? (
          <p>Welcome back!</p>
        ) : (
          <p>Join us and be part of something great.</p>
        )}
        <button onClick={() => setIsMember(!isMember)}>
          {isMember ? "Logout" : "Become a Member"}
        </button>
      </header>

      <main>
        <h2>Active Members</h2>
        <ul>
          {members.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>

        <form onSubmit={addMember} style={{ marginTop: "1rem" }}>
          <input
            type="text"
            value={newMember}
            onChange={(e) => setNewMember(e.target.value)}
            placeholder="Enter name"
          />
          <button type="submit">Add</button>
        </form>
      </main>

      <footer style={{ marginTop: "2rem", color: "#666" }}>
        <p>© 2025 Community Project</p>
      </footer>
    </div>
  );
}
