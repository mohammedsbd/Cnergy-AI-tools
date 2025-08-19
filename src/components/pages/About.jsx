import React, { useState } from "react";

const menu = [
  { title: "Dashboard", content: "Overview of your data" },
  { title: "Settings", content: "Adjust your preferences" },
  { title: "Help", content: "Find support articles" },
];

export default function AccordionMenu() {
  const [open, setOpen] = useState(null);

  return (
    <div className="max-w-md mx-auto mt-6">
      <h1 className="text-xl font-bold mb-3">Accordion Menu</h1>
      {menu.map((item, i) => (
        <div key={i} className="border rounded mb-2">
          <button
            className="w-full text-left px-3 py-2 font-semibold"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.title}
          </button>
          {open === i && <div className="px-3 py-2">{item.content}</div>}
        </div>
      ))}
    </div>
  );
}
