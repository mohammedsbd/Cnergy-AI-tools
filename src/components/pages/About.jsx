function ThemeToggler() {
  const [dark, setDark] = React.useState(false);

  const themeStyle = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "1rem",
    textAlign: "center",
  };

  return (
    <div style={themeStyle}>
      <h2>{dark ? "Dark" : "Light"} Theme</h2>
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
