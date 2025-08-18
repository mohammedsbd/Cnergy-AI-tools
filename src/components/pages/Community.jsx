import React, { useState, useEffect } from "react";

const generateRandomData = () => {
  const categories = ["Tech", "Finance", "Healthcare", "Education", "Retail"];
  const statusOptions = ["Active", "Pending", "Archived"];
  const newItems = [];

  for (let i = 0; i < 25; i++) {
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const randomStatus =
      statusOptions[Math.floor(Math.random() * statusOptions.length)];

    newItems.push({
      id: `item-${i}`,
      name: `Project ${String.fromCharCode(65 + i)}`,
      category: randomCategory,
      status: randomStatus,
      value: (Math.random() * 10000).toFixed(2),
      createdDate: new Date(
        Date.now() - Math.random() * 86400000 * 30
      ).toLocaleDateString(),
    });
  }
  return newItems;
};

const DataDashboard = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch from an API
    setTimeout(() => {
      setData(generateRandomData());
      setLoading(false);
    }, 1000);
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredData = data.filter((item) => {
    if (filter === "All") {
      return true;
    }
    return item.category === filter;
  });

  if (loading) {
    return <div className="loading-state">Loading dashboard data...</div>;
  }

  return (
    <div className="dashboard-container">
      <h2>Project Dashboard</h2>
      <div className="filter-controls">
        <label htmlFor="category-filter">Filter by Category:</label>
        <select
          id="category-filter"
          onChange={handleFilterChange}
          value={filter}
        >
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Education">Education</option>
          <option value="Retail">Retail</option>
        </select>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Value</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.status}</td>
              <td>${item.value}</td>
              <td>{item.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataDashboard;
