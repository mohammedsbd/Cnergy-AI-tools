import React, { useState } from "react";

const TopicSubscription = ({ topic }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
    // In a real app, this would send an API request
    const action = isSubscribed ? "Unsubscribed from" : "Subscribed to";
    console.log(`${action} ${topic}`);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
      <span className="font-semibold text-gray-800">
        Get updates on: <span className="text-blue-600">{topic}</span>
      </span>
      <button
        onClick={handleSubscribe}
        className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
          isSubscribed
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {isSubscribed ? "Unsubscribe" : "Subscribe"}
      </button>
    </div>
  );
};

export default TopicSubscription;
