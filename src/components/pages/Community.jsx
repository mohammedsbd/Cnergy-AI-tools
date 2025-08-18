import { useState } from "react";

export default function Community() {
  const [members, setMembers] = useState(["Alice", "Bob", "Charlie"]);
  const [newMember, setNewMember] = useState("");

  const addMember = (e) => {
    e.preventDefault();
    if (newMember.trim()) {
      setMembers([...members, newMember.trim()]);
      setNewMember("");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🌍 Community Hub</h1>
      <p>Connecting people, sharing knowledge, building futures.</p>
      <form onSubmit={addMember}>
        <input
          type="text"
          value={newMember}
          onChange={(e) => setNewMember(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Add Member</button>
      </form>
      <ul>
        {members.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </div>
  );
}
