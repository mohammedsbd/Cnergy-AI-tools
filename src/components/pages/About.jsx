function UserProfile({ user }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        width: "250px",
        borderRadius: "8px",
      }}
    >
      <img
        src={user.avatar}
        alt="Avatar"
        style={{ width: "100%", borderRadius: "50%" }}
      />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => alert(`Message sent to ${user.name}`)}>
        Send Message
      </button>
    </div>
  );
}
