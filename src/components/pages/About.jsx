function UserDashboard({ user }) {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      <header style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img
          src={user.avatar}
          alt="avatar"
          width="80"
          style={{ borderRadius: "50%" }}
        />
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </header>

      <section style={{ marginTop: "2rem" }}>
        <h3>Stats</h3>
        <ul>
          <li>Posts: {user.posts}</li>
          <li>Followers: {user.followers}</li>
          <li>Following: {user.following}</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <button onClick={() => alert("Settings clicked")}>Edit Profile</button>
      </section>
    </div>
  );
}
