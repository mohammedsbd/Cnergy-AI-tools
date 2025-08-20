import React, { useState } from "react";

function ThemeToggler() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        background: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "16px",
      }}
    >
      <h2>{dark ? "Dark" : "Light"} Theme</h2>
      <button onClick={() => setDark((d) => !d)}>Switch Theme</button>
    </div>
  );
}

export default ThemeToggler;
export async function getStaticProps() {
  return {
    props: {
      title: "About",
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [], // No dynamic paths
    fallback: false, // No fallback
  };
}
export function getServerSideProps() {
  return {
    props: {
      title: "About",
    },
  };
}