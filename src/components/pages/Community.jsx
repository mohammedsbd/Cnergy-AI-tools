import React, { useState, useEffect, useRef } from "react";

// Main component: A simple chat interface
const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Auto-scroll to the bottom of the chat window
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Simulate a bot response
  const handleBotResponse = (userMessage) => {
    const responses = {
      hello: "Hello there! How can I help you today?",
      "how are you?": "I'm a bot, but I'm doing great! Thanks for asking.",
      "what is react?":
        "React is a JavaScript library for building user interfaces.",
      bye: "Goodbye! Have a great day!",
    };
    const botReply =
      responses[userMessage.toLowerCase()] ||
      "I'm not sure how to respond to that.";

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      scrollToBottom();
    }, 500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");

    handleBotResponse(userMessage);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-container">
      <h2>Simple Bot Chat</h2>
      <div className="message-list">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <span className="sender-name">
              {msg.sender === "user" ? "You" : "Bot"}:
            </span>
            <div className="message-bubble">{msg.text}</div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="message-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
      <style jsx>{`
        .chat-container {
          display: flex;
          flex-direction: column;
          width: 400px;
          height: 500px;
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
          margin: 20px auto;
        }
        .message-list {
          flex-grow: 1;
          padding: 10px;
          overflow-y: auto;
          background-color: #f0f0f0;
        }
        .message {
          display: flex;
          margin-bottom: 10px;
          align-items: flex-end;
        }
        .message.user {
          justify-content: flex-end;
        }
        .message.bot {
          justify-content: flex-start;
        }
        .message-bubble {
          padding: 8px 12px;
          border-radius: 20px;
          max-width: 70%;
          line-height: 1.4;
        }
        .message.user .message-bubble {
          background-color: #007bff;
          color: white;
        }
        .message.bot .message-bubble {
          background-color: #e2e2e2;
          color: #333;
        }
        .sender-name {
          font-weight: bold;
          font-size: 0.8em;
          margin-right: 5px;
        }
        .message.user .sender-name {
          display: none;
        }
        .message-form {
          display: flex;
          padding: 10px;
          border-top: 1px solid #ccc;
        }
        .message-form input {
          flex-grow: 1;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .message-form button {
          margin-left: 10px;
          padding: 8px 12px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ChatRoom;
