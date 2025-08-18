import { useState } from "react";

export default function Community() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMessage("❌ Invalid email");
    } else {
      setMessage(`✅ Subscribed with ${email}`);
      setEmail("");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📰 Community Newsletter</h1>
      <form onSubmit={subscribe}>
        <input
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
    </div>
  );
}
