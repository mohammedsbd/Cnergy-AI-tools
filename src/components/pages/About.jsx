import React, { useState } from "react";

function AvatarGenerator() {
  const [seed, setSeed] = useState(Math.random());
  const generate = () => setSeed(Math.random());

  const url = `https://avatars.dicebear.com/api/human/${seed}.svg`;

  return (
    <div>
      <h2>Avatar Generator</h2>
      <img src={url} alt="Avatar" width="200" height="200" />
      <button onClick={generate}>New Avatar</button>
    </div>
  );
}

export default AvatarGenerator;
