import React, { useState, useEffect } from "react";

function NewsFeed() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=YOUR_API_KEY`
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles || []));
  }, [category]);

  return (
    <div>
      <h2>News Feed</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {["general", "technology", "health", "sports", "business"].map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <ul>
        {articles.map((a, i) => (
          <li key={i}>
            <a href={a.url} target="_blank" rel="noopener noreferrer">
              {a.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsFeed;
