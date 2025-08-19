import React, { useState } from "react";

export default function AILoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert(`Logging in with ${email}`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={submit}
        className="p-6 bg-white shadow rounded max-w-sm w-full"
      >
        <h1 className="text-xl font-bold mb-4">Login to AI Platform</h1>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-indigo-600 text-white w-full py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
