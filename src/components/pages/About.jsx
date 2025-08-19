import React, { useState } from "react";

export default function AIChatBox() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! I’m your AI assistant." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages([...messages, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "This is an AI response." },
      ]);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h1 className="text-xl font-bold mb-3">AI Chat</h1>
      <div className="h-64 overflow-y-auto border p-2 rounded mb-3 bg-gray-50">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`my-1 p-2 rounded w-fit ${
              m.sender === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-200 text-black"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="border px-2 py-1 flex-grow"
          placeholder="Type message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="bg-green-500 text-white px-3 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
