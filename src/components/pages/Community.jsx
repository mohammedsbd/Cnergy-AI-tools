export default function Community() {
  const values = ["Respect", "Collaboration", "Innovation", "Growth"];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Our Community Values</h1>
      <ul>
        {values.map((v, i) => (
          <li key={i}>✅ {v}</li>
        ))}
      </ul>
    </div>
  );
}
