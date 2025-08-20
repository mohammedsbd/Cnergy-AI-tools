import React, { useState } from "react";

function StyledButton({ children }) {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive((a) => !a)}
      style={{
        padding: "10px 20px",
        backgroundColor: active ? "green" : "gray",
        color: "white",
        border: 0,
        borderRadius: "4px",
      }}
    >
      {children} ({active ? "On" : "Off"})
    </button>
  );
}

function StyledApp() {
  return (
    <div>
      <h2>Styled Button</h2>
      <StyledButton>Toggle Me</StyledButton>
    </div>
  );
}

export default StyledApp;
