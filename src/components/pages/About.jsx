import React, { useState, useEffect } from "react";

const FinancialData = ({ initialData }) => {
  const [marketData, setMarketData] = useState(initialData);

  useEffect(() => {
    // Simulate real-time updates every 5 seconds
    const interval = setInterval(() => {
      setMarketData((prevData) =>
        prevData.map((item) => ({
          ...item,
          price: (item.price * (1 + (Math.random() - 0.5) * 0.02)).toFixed(2),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Market Data</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {marketData.map((item) => (
          <div key={item.symbol} className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">{item.symbol}</h4>
            <p className="text-sm text-gray-400">{item.company}</p>
            <p className="text-2xl font-bold mt-2">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialData;
