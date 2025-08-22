function Notifications({ notifications }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button onClick={() => setOpen(!open)}>
        🔔 ({notifications.length})
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "2rem",
            right: 0,
            background: "white",
            border: "1px solid #ccc",
            padding: "1rem",
            width: "200px",
          }}
        >
          <ul>
            {notifications.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
