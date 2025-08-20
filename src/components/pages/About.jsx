import React, { useState } from "react";
import QRCode from "qrcode.react";

function QRGenerator() {
  const [text, setText] = useState("https://example.com");

  return (
    <div>
      <h2>QR Code Generator</h2>
      <input
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%" }}
      />
      <div style={{ marginTop: "16px" }}>
        <QRCode value={text} />
      </div>
    </div>
  );
}

export default QRGenerator;
