import React, { useState } from "react";

export default function AIContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    alert(`Message sent: ${form.message}`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact AI Team</h1>
      <form onSubmit={submit} className="space-y-3">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}
