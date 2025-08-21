import React, { useState, useEffect } from "react";

const LiveBlog = ({ initialUpdates }) => {
  const [updates, setUpdates] = useState(initialUpdates);

  useEffect(() => {
    // Simulate fetching new updates every 10 seconds
    const interval = setInterval(() => {
      const newUpdate = {
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString(),
        text: `A new live update has occurred. This is a simulated event.`,
      };
      setUpdates((prevUpdates) => [newUpdate, ...prevUpdates]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
        <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse mr-2"></span>
        Live Blog
      </h2>
      <div className="space-y-4">
        {updates.map((update) => (
          <div key={update.id} className="border-l-4 border-gray-200 pl-4 py-2">
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <span className="font-semibold">{update.timestamp}</span>
            </div>
            <p className="text-gray-700">{update.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveBlog;
