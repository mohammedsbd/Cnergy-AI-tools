import React, { useState } from "react";

const WeatherWidget = () => {
  const [city, setCity] = useState("New York");
  const [weatherData, setWeatherData] = useState({
    temperature: 25,
    condition: "Sunny",
    icon: "☀️",
  });

  const cities = [
    { name: "New York", temperature: 25, condition: "Sunny", icon: "☀️" },
    { name: "London", temperature: 18, condition: "Cloudy", icon: "☁️" },
    { name: "Tokyo", temperature: 30, condition: "Rainy", icon: "🌧️" },
    { name: "Sydney", temperature: 22, condition: "Windy", icon: "🌬️" },
  ];

  const updateCity = (selectedCity) => {
    setCity(selectedCity);
    const data = cities.find((c) => c.name === selectedCity);
    setWeatherData(data);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Weather Widget</h2>
      <div style={styles.citySelector}>
        <label htmlFor="city" style={styles.label}>
          Select City:
        </label>
        <select
          id="city"
          value={city}
          onChange={(e) => updateCity(e.target.value)}
          style={styles.select}
        >
          {cities.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div style={styles.weatherCard}>
        <div style={styles.icon}>{weatherData.icon}</div>
        <div style={styles.info}>
          <div style={styles.temp}>{weatherData.temperature}°C</div>
          <div style={styles.condition}>{weatherData.condition}</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    padding: "20px",
    margin: "40px auto",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontFamily: "sans-serif",
    backgroundColor: "#f0f8ff",
    textAlign: "center",
  },
  title: {
    marginBottom: "15px",
  },
  citySelector: {
    marginBottom: "20px",
  },
  label: {
    marginRight: "10px",
    fontWeight: "bold",
  },
  select: {
    padding: "8px",
    fontSize: "14px",
  },
  weatherCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  icon: {
    fontSize: "40px",
    marginRight: "15px",
  },
  info: {
    textAlign: "left",
  },
  temp: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  condition: {
    fontSize: "16px",
    color: "#555",
  },
};

export default WeatherWidget;
