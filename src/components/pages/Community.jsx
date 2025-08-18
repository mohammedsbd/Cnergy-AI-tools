import { useState } from "react";

export default function Community() {
  const [isMember, setIsMember] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      {isMember ? <h2>Welcome back! 🎉</h2> : <h2>Join Us Today 🚀</h2>}
      <button onClick={() => setIsMember(!isMember)}>
        {isMember ? "Log Out" : "Become a Member"}
      </button>
    </div>
  );
}
