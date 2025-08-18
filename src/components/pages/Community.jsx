export default function Community() {
  const stories = [
    "Alice launched a coding workshop",
    "Bob organized a community cleanup",
    "Charlie hosted a networking event",
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Community Stories</h1>
      {stories.map((s, i) => (
        <article key={i} style={{ marginBottom: "1rem" }}>
          <p>{s}</p>
        </article>
      ))}
    </div>
  );
}
