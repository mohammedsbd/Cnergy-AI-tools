export default function Community() {
  const testimonials = [
    { name: "Alice", text: "This community changed my life!" },
    { name: "Bob", text: "I made great friends here." },
    { name: "Charlie", text: "The events are top-notch!" },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🙌 What Members Say</h1>
      {testimonials.map((t, i) => (
        <blockquote key={i} style={{ marginBottom: "1rem" }}>
          <p>"{t.text}"</p>
          <footer>- {t.name}</footer>
        </blockquote>
      ))}
    </div>
  );
}
