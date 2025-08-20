import React, { useState } from "react";

function CodeEditor() {
  const [code, setCode] = useState(
    "// Write JS code here\nconsole.log('Hello, world!');"
  );
  const [output, setOutput] = useState("");

  const run = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      setOutput(String(result));
    } catch (e) {
      setOutput(e.message);
    }
  };

  return (
    <div>
      <h2>Mini Code Editor</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        style={{ width: "100%" }}
      />
      <button onClick={run}>Run</button>
      <pre style={{ background: "#f0f0f0", padding: "8px", marginTop: "12px" }}>
        {output}
      </pre>
    </div>
  );
}

export default CodeEditor;
