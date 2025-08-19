import React, { useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Theme Switcher</h1>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Toggle Theme
      </button>
      <p className="mt-3">Current theme: {theme}</p>
    </div>
  );
}
