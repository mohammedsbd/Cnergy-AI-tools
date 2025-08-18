export default function Community() {
  const events = [
    { title: "Workshop", date: "2025-08-20" },
    { title: "Meetup", date: "2025-09-02" },
    { title: "Hackathon", date: "2025-09-15" },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Upcoming Events</h1>
      <ul>
        {events.map((e, i) => (
          <li key={i}>
            {e.title} — <strong>{e.date}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
