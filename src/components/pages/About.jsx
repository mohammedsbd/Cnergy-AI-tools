import React, { useState } from "react";

function WeatherWidget() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
      );
      const data = await res.json();
      setWeather(data);
    } catch {
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Weather Finder</h2>
      <input
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather} disabled={loading}>
        {loading ? "Loading…" : "Get Weather"}
      </button>
      {weather && weather.main && (
        <div>
          <p>
            <strong>
              {weather.name}, {weather.sys.country}
            </strong>
          </p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherWidget;
