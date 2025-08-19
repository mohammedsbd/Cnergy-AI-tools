import React, { useState, useEffect } from "react";

export default function AIDashboard() {
  const [stats, setStats] = useState({
    models: 12,
    users: 450,
    datasets: 23,
    uptime: "99.9%",
  });

  const [logs, setLogs] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setLogs([
      "Model GPT-X deployed successfully.",
      "Dataset 'VisionSet' uploaded.",
      "User Alice requested access.",
      "Training completed on cluster B2.",
    ]);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const containerStyle =
    theme === "light" ? "bg-gray-50 text-black" : "bg-gray-900 text-white";

  return (
    <div className={`min-h-screen p-6 ${containerStyle}`}>
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">AI Dashboard</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
          <h2 className="text-sm text-gray-500">Models</h2>
          <p className="text-2xl font-bold">{stats.models}</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
          <h2 className="text-sm text-gray-500">Users</h2>
          <p className="text-2xl font-bold">{stats.users}</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
          <h2 className="text-sm text-gray-500">Datasets</h2>
          <p className="text-2xl font-bold">{stats.datasets}</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
          <h2 className="text-sm text-gray-500">Uptime</h2>
          <p className="text-2xl font-bold">{stats.uptime}</p>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Recent Activity</h2>
        <ul className="space-y-2">
          {logs.map((log, i) => (
            <li
              key={i}
              className="p-3 bg-gray-100 dark:bg-gray-700 rounded shadow-sm"
            >
              {log}
            </li>
          ))}
        </ul>
      </section>

      {/* Chart Placeholder */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Training Progress</h2>
        <div className="w-full h-40 bg-gradient-to-r from-green-400 to-blue-500 rounded flex items-center justify-center text-white font-bold">
          Chart Placeholder
        </div>
      </section>

      {/* Settings */}
      <section>
        <h2 className="text-xl font-semibold mb-3">User Settings</h2>
        <form className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Notifications
            </label>
            <select className="w-full border px-3 py-2 rounded">
              <option>Email</option>
              <option>SMS</option>
              <option>Push</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Save Settings
          </button>
        </form>
      </section>
    </div>
  );
}
