import React, { useState, useEffect } from "react";

const cities = [
  { name: "New York", zone: "America/New_York" },
  { name: "London", zone: "Europe/London" },
  { name: "Tokyo", zone: "Asia/Tokyo" },
  { name: "Nairobi", zone: "Africa/Nairobi" },
  { name: "Addis Ababa", zone: "Africa/Addis_Ababa" },
];

function WorldClock() {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const obj = {};
      cities.forEach((c) => {
        obj[c.name] = now.toLocaleTimeString("en-US", { timeZone: c.zone });
      });
      setTimes(obj);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h2>World Clock</h2>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Local Time</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((c) => (
            <tr key={c.name}>
              <td>{c.name}</td>
              <td>{times[c.name]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorldClock;
