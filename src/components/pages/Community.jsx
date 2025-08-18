export default function Community() {
  const members = [
    { name: "Jane", role: "Leader" },
    { name: "Tom", role: "Member" },
    { name: "Alice", role: "Moderator" },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Community Members</h1>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m, i) => (
            <tr key={i}>
              <td>{m.name}</td>
              <td>{m.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
