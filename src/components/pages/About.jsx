import React, { useState } from "react";

export default function FormExample() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${form.name} - ${form.email}`);
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-3">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-2 py-1"
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border px-2 py-1"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full border px-2 py-1"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
