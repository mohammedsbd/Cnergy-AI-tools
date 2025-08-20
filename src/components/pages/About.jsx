import React, { useState } from "react";

function TabPanel({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="tab-headers">
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              fontWeight: i === active ? "bold" : "normal",
              marginRight: "8px",
            }}
          >
            {t.title}
          </button>
        ))}
      </div>
      <div className="tab-content" style={{ marginTop: "12px" }}>
        {tabs[active] && tabs[active].content}
      </div>
    </div>
  );
}

function TabsApp() {
  const myTabs = [
    { title: "Home", content: <div>Welcome Home!</div> },
    { title: "Profile", content: <div>Your Profile Section</div> },
    { title: "Settings", content: <div>Adjust Settings Here</div> },
  ];

  return (
    <div>
      <h2>Tabs Example</h2>
      <TabPanel tabs={myTabs} />
    </div>
  );
}

export default TabsApp;
