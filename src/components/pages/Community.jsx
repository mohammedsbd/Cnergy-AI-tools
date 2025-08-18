import React, { useState, useEffect, useCallback, useRef } from "react";

// --- Utility function to get a random item from an array ---
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// --- List of greetings and farewells in different languages ---
const greetings = ["Hello", "Hola", "Bonjour", "Ciao", "Hallo", "Konnichiwa"];
const farewells = [
  "Goodbye",
  "Adiós",
  "Au revoir",
  "Arrivederci",
  "Tschüss",
  "Sayōnara",
];

// --- User Profile Card Component ---
const UserProfileCard = React.memo(({ user }) => (
  <div className="user-profile-card">
    <div className="profile-header">
      <img src={user.avatar} alt={`${user.name}'s avatar`} className="avatar" />
      <h3 className="user-name">{user.name}</h3>
    </div>
    <div className="profile-details">
      <p>
        <strong>Status:</strong> {user.status}
      </p>
      <p>
        <strong>Joined:</strong> {user.joined}
      </p>
      <p>
        <strong>Last Seen:</strong> {user.lastSeen}
      </p>
    </div>
    <p className="bio">{user.bio}</p>
  </div>
));

// --- Main Chat Log Component ---
const ChatLog = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatLogRef = useRef(null);

  // Simulates users joining and leaving the chat
  const handleUserActivity = useCallback(() => {
    const actions = ["join", "leave"];
    const action = getRandomItem(actions);
    const userName = `User_${Math.floor(Math.random() * 100)}`;
    const messageContent =
      action === "join"
        ? `${userName} has entered the chat.`
        : `${userName} has left the chat.`;
    const messageType = "system";

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), content: messageContent, type: messageType },
    ]);
  }, []);

  // Simulates a user typing and sending a random message
  const handleBotMessage = useCallback(() => {
    setIsTyping(true);
    setTimeout(() => {
      const messageContent =
        getRandomItem(greetings) + " " + getRandomItem(farewells);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, content: messageContent, type: "user" },
      ]);
      setIsTyping(false);
    }, 1500);
  }, []);

  // Effect for auto-scrolling to the latest message
  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages]);

  // Set up intervals for automated chat activity
  useEffect(() => {
    const userActivityInterval = setInterval(handleUserActivity, 5000);
    const botMessageInterval = setInterval(handleBotMessage, 8000);

    return () => {
      clearInterval(userActivityInterval);
      clearInterval(botMessageInterval);
    };
  }, [handleUserActivity, handleBotMessage]);

  const mockUsers = [
    {
      name: "Alice",
      avatar: "https://i.pravatar.cc/150?u=a",
      status: "Online",
      joined: "Jan 2024",
      lastSeen: "now",
      bio: "Loves coding and hiking.",
    },
    {
      name: "Bob",
      avatar: "https://i.pravatar.cc/150?u=b",
      status: "Offline",
      joined: "Feb 2024",
      lastSeen: "2 hours ago",
      bio: "Working on a new project.",
    },
  ];

  return (
    <div className="chat-room-container">
      <div className="sidebar">
        <h2>Users</h2>
        {mockUsers.map((user) => (
          <UserProfileCard key={user.name} user={user} />
        ))}
      </div>
      <div className="chat-area">
        <div className="chat-log" ref={chatLogRef}>
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-message ${msg.type}`}>
              {msg.type === "user" && (
                <span className="message-content">{msg.content}</span>
              )}
              {msg.type === "system" && (
                <span className="system-message">{msg.content}</span>
              )}
            </div>
          ))}
        </div>
        <div className="typing-indicator">
          {isTyping && <span>User is typing...</span>}
        </div>
        <div className="input-area">
          <input type="text" placeholder="Type a message..." disabled={true} />
          <button disabled={true}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatLog;
