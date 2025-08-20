import React, { useState, useEffect } from "react";

function DataFetcher({ url }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((e) => setErr(e.message))
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) return <p>Loading…</p>;
  if (err) return <p>Error: {err}</p>;
  return (
    <div>
      <h3>Data:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

function FetchApp() {
  return (
    <div>
      <h2>Fetch Example</h2>
      <DataFetcher url="https://jsonplaceholder.typicode.com/todos/1" />
    </div>
  );
}

export default FetchApp;
