import React, { useState } from "react";
import { Document, Page } from "react-pdf"; // assume react-pdf is installed

function PDFPreviewer() {
  const [file, setFile] = useState(null);

  return (
    <div>
      <h2>PDF Thumbnail Previewer</h2>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />
      {file && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <Document file={file}>
            <Page pageNumber={1} width={300} />
          </Document>
        </div>
      )}
    </div>
  );
}

export default PDFPreviewer;
