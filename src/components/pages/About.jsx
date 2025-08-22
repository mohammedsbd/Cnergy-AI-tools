function ChatBox({ user }) {
  const [messages, setMessages] = React.useState([]);
  const [text, setText] = React.useState("");

  const sendMessage = () => {
    if (text.trim()) {
      setMessages([...messages, { user, text }]);
      setText("");
    }
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", maxWidth: "400px" }}
    >
      <h3>Chat</h3>
      <div style={{ height: "200px", overflowY: "auto", marginBottom: "1rem" }}>
        {messages.map((msg, i) => (
          <div key={i}>
            <strong>{msg.user}</strong>: {msg.text}
          </div>
        ))}
      </div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
