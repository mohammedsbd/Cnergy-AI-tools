import React from "react";

export default function AIAssistantCard() {
  return (
    <div className="p-6 max-w-md mx-auto border rounded-lg shadow bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h1 className="text-2xl font-bold mb-3">Meet Your AI Assistant</h1>
      <p className="mb-4">
        I can help you summarize documents, generate ideas, and automate tasks.
        Just type your query and I’ll provide intelligent insights.
      </p>
      <button className="bg-white text-indigo-600 px-4 py-2 rounded shadow">
        Ask Me Anything
      </button>
    </div>
  );
}
