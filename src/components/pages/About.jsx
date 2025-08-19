import React, { useState, useEffect } from "react";

export default function WeatherCard() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Simulate fetching weather
    const timer = setTimeout(() => {
      setWeather({
        city: "New York",
        temp: 23,
        condition: "Sunny",
        humidity: 60,
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-sm mx-auto mt-6 p-4 border rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Weather Info</h2>
      {!weather ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3 className="text-xl">{weather.city}</h3>
          <p className="text-2xl">{weather.temp}°C</p>
          <p className="capitalize">{weather.condition}</p>
          <p className="text-sm text-gray-500">Humidity: {weather.humidity}%</p>
        </div>
      )}
    </div>
  );
}
