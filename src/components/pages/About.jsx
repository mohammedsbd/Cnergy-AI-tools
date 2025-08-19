import React from "react";

export default function HoverCard() {
  return (
    <div className="flex justify-center mt-6">
      <div className="relative group w-48 h-32 bg-gray-200 rounded shadow">
        <p className="text-center pt-12">Hover me!</p>
        <div className="absolute inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded">
          <p>More Info</p>
        </div>
      </div>
    </div>
  );
}
