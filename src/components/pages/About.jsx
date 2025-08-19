import React, { useState } from "react";

export default function Tabs() {
  const [active, setActive] = useState("Home");

  const tabs = ["Home", "Profile", "Settings"];

  return (
    <div className="max-w-md mx-auto mt-6">
      <div className="flex space-x-3 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-3 py-2 ${
              active === tab ? "border-b-2 border-blue-600 font-bold" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4">
        <p>You selected: {active}</p>
      </div>
    </div>
  );
}
