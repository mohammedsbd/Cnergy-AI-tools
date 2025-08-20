import React, { useState, useEffect } from "react";

function IPGeolocation() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading IP info…</p>;
  if (!data) return <p>Failed to retrieve data.</p>;

  return (
    <div>
      <h2>Your IP Info</h2>
      <ul>
        <li>
          <strong>IP:</strong> {data.ip}
        </li>
        <li>
          <strong>City:</strong> {data.city}
        </li>
        <li>
          <strong>Region:</strong> {data.region}
        </li>
        <li>
          <strong>Country:</strong> {data.country_name}
        </li>
        <li>
          <strong>ISP:</strong> {data.org}
        </li>
      </ul>
    </div>
  );
}

export default IPGeolocation;
