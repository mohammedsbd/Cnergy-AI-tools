function Tabs({ tabs }) {
  const [active, setActive] = React.useState(0);

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem" }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            style={{ fontWeight: active === index ? "bold" : "normal" }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <p>{tabs[active].content}</p>
      </div>
    </div>
  );
}
