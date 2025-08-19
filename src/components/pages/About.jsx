import React, { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark
      ? "bg-black text-white"
      : "bg-white text-black";
  }, [dark]);

  return (
    <div className="flex flex-col items-center mt-6 space-y-3">
      <h1 className="text-xl font-bold">Dark Mode Toggle</h1>
      <button
        onClick={() => setDark((d) => !d)}
        className="px-4 py-2 rounded bg-gray-700 text-white"
      >
        {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}
