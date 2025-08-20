import React, { useState } from "react";

function ValidatedForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const valid = email.includes("@") && email.includes(".");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Validation Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submitted &&
        (valid ? (
          <p style={{ color: "green" }}>Valid email!</p>
        ) : (
          <p style={{ color: "red" }}>Invalid email.</p>
        ))}
    </div>
  );
}

export default ValidatedForm;
