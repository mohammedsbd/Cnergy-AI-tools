import React, { useState } from "react";
import { marked } from "marked";

function MarkdownPreviewer() {
  const [input, setInput] = useState("# Hello, Markdown!");

  return (
    <div>
      <h2>Markdown Previewer</h2>
      <textarea
        rows={10}
        style={{ width: "100%" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h3>Preview:</h3>
      <div
        style={{ border: "1px solid #ccc", padding: "8px" }}
        dangerouslySetInnerHTML={{ __html: marked(input) }}
      />
    </div>
  );
}

export default MarkdownPreviewer;
