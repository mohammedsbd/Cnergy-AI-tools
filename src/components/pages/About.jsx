import React, { useState } from "react";

function FilePreviewer() {
  const [files, setFiles] = useState([]);

  const onDrop = (e) => {
    e.preventDefault();
    setFiles(Array.from(e.dataTransfer.files));
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      style={{
        border: "2px dashed #aaa",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <h2>Drag & Drop Files</h2>
      <p>Drop files here to preview their names.</p>
      <ul>
        {files.map((file, i) => (
          <li key={i}>
            {file.name} — {Math.round(file.size / 1024)} KB
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilePreviewer;
