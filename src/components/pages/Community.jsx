export default function Community() {
  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1>🌍 Community Platform</h1>
        <nav>
          <a href="/home">Home</a> | <a href="/about">About</a> |{" "}
          <a href="/events">Events</a>
        </nav>
      </header>

      <section style={{ marginBottom: "2rem" }}>
        <h2>About Us</h2>
        <p>
          Our mission is to bring people together, share knowledge, and build a
          better future through collaboration.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Our Core Values</h2>
        <ul>
          <li>🤝 Respect</li>
          <li>💡 Innovation</li>
          <li>🌱 Growth</li>
        </ul>
      </section>

      <footer style={{ textAlign: "center", color: "#666" }}>
        <p>© 2025 Global Community</p>
      </footer>
    </div>
  );
}
