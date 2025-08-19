import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#ff0000");

  return (
    <div className="p-4 max-w-sm mx-auto text-center">
      <h1 className="text-xl font-bold mb-3">Color Picker</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-16 h-16 border"
      />
      <p className="mt-3">Selected: {color}</p>
      <div
        className="mt-3 w-24 h-24 border mx-auto"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}
