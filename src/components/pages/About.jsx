import React, { useState } from "react";

export default function NotificationBell() {
  const [count, setCount] = useState(3);

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={() => setCount(0)}
        className="relative bg-gray-200 p-4 rounded-full"
      >
        🔔
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
            {count}
          </span>
        )}
      </button>
    </div>
  );
}
