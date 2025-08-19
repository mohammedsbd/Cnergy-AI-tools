import React, { useState } from "react";

export default function MarkdownPreview() {
  const [text, setText] = useState("**Hello World**");

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-3">Markdown Preview</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-32 border p-2"
      />
      <h2 className="mt-4 font-semibold">Preview:</h2>
      <div
        className="border p-3 mt-2"
        dangerouslySetInnerHTML={{
          __html: text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>"),
        }}
      />
    </div>
  );
}
