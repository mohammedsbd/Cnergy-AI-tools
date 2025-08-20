import React, { useState } from "react";
import CounterLogger from "./CounterLogger";
import TabsApp from "./TabsApp";
import FetchApp from "./FetchApp";

function MiniApp() {
  const sections = ["Counter", "Tabs", "Fetch"];
  const [sel, setSel] = useState(sections[0]);

  return (
    <div>
      <h1>Mini Combined App</h1>
      <div>
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => setSel(s)}
            style={{
              fontWeight: s === sel ? "bold" : "normal",
              marginRight: "8px",
            }}
          >
            {s}
          </button>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        {sel === "Counter" && <CounterLogger />}
        {sel === "Tabs" && <TabsApp />}
        {sel === "Fetch" && <FetchApp />}
      </div>
    </div>
  );
}

export default MiniApp;
