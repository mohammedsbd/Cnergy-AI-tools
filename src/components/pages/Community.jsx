import { useState } from "react";

export default function Community() {
  const [email, setEmail] = useState("");

  const subscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Join Our Newsletter</h1>
      <form onSubmit={subscribe}>
        <input
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
