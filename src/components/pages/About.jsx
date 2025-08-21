import React, { useState } from "react";

const DataDashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState("traffic");

  const handleMetricChange = (e) => {
    setSelectedMetric(e.target.value);
  };

  const getChartData = () => {
    // In a real app, this would fetch data from an API
    switch (selectedMetric) {
      case "traffic":
        return [100, 200, 150, 300, 250];
      case "engagement":
        return [50, 75, 60, 90, 85];
      case "conversions":
        return [10, 15, 12, 20, 18];
      default:
        return [];
    }
  };

  const chartData = getChartData();

  return (
    <div className="bg-gray-800 text-white rounded-lg p-8 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">AI Performance Metrics</h2>
        <select
          value={selectedMetric}
          onChange={handleMetricChange}
          className="bg-gray-700 text-white rounded-md px-3 py-1"
        >
          <option value="traffic">Traffic</option>
          <option value="engagement">Engagement</option>
          <option value="conversions">Conversions</option>
        </select>
      </div>
      <div className="h-64 flex items-end space-x-2">
        {chartData.map((value, index) => (
          <div
            key={index}
            className="w-12 bg-blue-500 rounded-t-lg transition-all duration-500"
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <p className="text-sm text-gray-400 text-center mt-4">
        Simulated data for {selectedMetric}.
      </p>
    </div>
  );
};

export default DataDashboard;
