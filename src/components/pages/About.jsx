import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-4 py-3">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">MySite</h1>
        <button className="sm:hidden" onClick={() => setOpen((o) => !o)}>
          ☰
        </button>
        <ul className="hidden sm:flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      {open && (
        <ul className="sm:hidden mt-3 space-y-2">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
}
