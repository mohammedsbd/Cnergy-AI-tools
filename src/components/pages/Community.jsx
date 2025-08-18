import React, { useState, useEffect, useRef, useCallback } from "react";
import Chart from "react-apexcharts"; // A popular charting library for React

// --- Utility Functions ---

// Generates a random integer within a range
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Generates an array of random data for the charts
const generateChartData = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push(getRandomInt(50, 200));
  }
  return data;
};

// Generates a random date within the last 30 days
const getRandomDate = () => {
  const day = getRandomInt(1, 28);
  const month = getRandomInt(1, 12);
  const year = 2024; // Fixed year for consistency
  return new Date(year, month - 1, day).toLocaleDateString("en-US");
};

// Generates an array of mock table data
const generateTableData = (count) => {
  const products = [
    "Product A",
    "Product B",
    "Product C",
    "Product D",
    "Product E",
  ];
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: i,
      product: products[getRandomInt(0, products.length - 1)],
      sales: getRandomInt(100, 1000),
      revenue: getRandomInt(500, 5000),
      date: getRandomDate(),
    });
  }
  return data;
};

// --- React Components ---

// Component for a data card (e.g., total sales)
const DataCard = React.memo(({ title, value, unit, color }) => (
  <div className="data-card" style={{ borderLeft: `5px solid ${color}` }}>
    <h4>{title}</h4>
    <h3>
      {value} {unit}
    </h3>
  </div>
));

// Component for a line chart
const LineChart = React.memo(({ series, categories }) => {
  const options = {
    chart: { toolbar: { show: false } },
    xaxis: { categories },
    tooltip: { enabled: true },
  };
  return (
    <div className="chart-wrapper">
      <Chart
        options={options}
        series={[{ name: "Sales", data: series }]}
        type="line"
        height={200}
      />
    </div>
  );
});

// Component for a bar chart
const BarChart = React.memo(({ series, categories }) => {
  const options = {
    chart: { toolbar: { show: false } },
    xaxis: { categories },
    plotOptions: { bar: { horizontal: false } },
  };
  return (
    <div className="chart-wrapper">
      <Chart
        options={options}
        series={[{ name: "Revenue", data: series }]}
        type="bar"
        height={200}
      />
    </div>
  );
});

// Main Dashboard Component
const DataDash = () => {
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState({});
  const [lineChartData, setLineChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const timerRef = useRef(null);

  // Simulates fetching all data from an API
  const fetchData = useCallback(() => {
    setLoading(true);
    timerRef.current = setTimeout(() => {
      const salesData = generateChartData(12);
      const revenueData = generateChartData(5);
      const mockTableData = generateTableData(15);

      const totalSales = salesData.reduce((sum, val) => sum + val, 0);
      const totalRevenue = revenueData.reduce((sum, val) => sum + val, 0);

      setMetrics({ totalSales, totalRevenue });
      setLineChartData(salesData);
      setBarChartData(revenueData);
      setTableData(mockTableData);
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time
  }, []);

  useEffect(() => {
    fetchData();
    return () => clearTimeout(timerRef.current);
  }, [fetchData]);

  if (loading) {
    return <div className="loading-state">Loading dashboard data...</div>;
  }

  const lineChartCategories = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const barChartCategories = [
    "Product A",
    "Product B",
    "Product C",
    "Product D",
    "Product E",
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">DataDash Analytics</h1>

      <div className="metrics-row">
        <DataCard
          title="Total Sales"
          value={metrics.totalSales}
          unit="units"
          color="#4CAF50"
        />
        <DataCard
          title="Total Revenue"
          value={metrics.totalRevenue}
          unit="$"
          color="#FFC107"
        />
        <DataCard
          title="New Customers"
          value={getRandomInt(50, 150)}
          unit=""
          color="#2196F3"
        />
        <DataCard
          title="Avg. Order Value"
          value={getRandomInt(20, 80)}
          unit="$"
          color="#9C27B0"
        />
      </div>

      <div className="charts-row">
        <LineChart series={lineChartData} categories={lineChartCategories} />
        <BarChart series={barChartData} categories={barChartCategories} />
      </div>

      <div className="table-wrapper">
        <h2>Recent Transactions</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Sales</th>
              <th>Revenue</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.product}</td>
                <td>{row.sales}</td>
                <td>${row.revenue.toFixed(2)}</td>
                <td>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataDash;
