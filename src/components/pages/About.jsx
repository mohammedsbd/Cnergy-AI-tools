import React, { useEffect, useState } from "react";

export default function AINewsFeed() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles([
      { headline: "AI beats human champions in strategy games" },
      { headline: "New model predicts protein folding accurately" },
      { headline: "Robotics powered by generative AI unveiled" },
    ]);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg">
      <h1 className="text-xl font-bold mb-4">AI News Feed</h1>
      <div className="space-y-3">
        {articles.map((a, i) => (
          <article key={i} className="p-3 bg-white shadow rounded">
            <h2>{a.headline}</h2>
          </article>
        ))}
      </div>
    </div>
  );
}
