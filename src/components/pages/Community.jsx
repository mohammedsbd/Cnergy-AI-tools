export default function Community() {
  const highlights = [
    { title: "Mentorship", desc: "Learn from experienced mentors." },
    { title: "Workshops", desc: "Gain new skills together." },
    { title: "Networking", desc: "Meet professionals and peers." },
    { title: "Hackathons", desc: "Innovate and build projects." },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🌟 Community Highlights</h1>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        {highlights.map((h, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <h2>{h.title}</h2>
            <p>{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
