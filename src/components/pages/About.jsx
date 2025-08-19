import React, { useState } from "react";

export default function ClipboardCopy() {
  const [text, setText] = useState("Copy this text!");
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-lg font-bold mb-3">Clipboard Copy</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border px-2 py-1 w-full"
      />
      <button
        onClick={copyText}
        className="mt-3 px-3 py-1 bg-blue-600 text-white rounded"
      >
        Copy
      </button>
      {copied && <p className="text-green-600 mt-2">Copied!</p>}
    </div>
  );
}
