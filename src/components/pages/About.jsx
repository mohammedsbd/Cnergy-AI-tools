import React, { useState } from "react";

export default function LoginForm() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username && form.password) {
      setLoggedIn(true);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-6 p-4 border rounded shadow">
      {loggedIn ? (
        <h2 className="text-xl font-bold">Welcome, {form.username}!</h2>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <h1 className="text-lg font-semibold">Login</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full border px-2 py-1"
            value={form.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border px-2 py-1"
            value={form.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
}
