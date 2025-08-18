import { useState } from "react";

export default function Community() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("General");

  const categories = ["General", "Events", "Help", "Off-Topic"];

  const posts = [
    { title: "Welcome to the forum!", category: "General" },
    { title: "Upcoming Hackathon", category: "Events" },
    { title: "Need help with React", category: "Help" },
    { title: "Favorite programming memes?", category: "Off-Topic" },
    { title: "Community meetup summary", category: "Events" },
  ];

  const trending = ["AI in 2025", "Remote work tips", "Open source projects"];

  const filteredPosts = posts.filter(
    (p) =>
      p.category === activeCategory &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex", fontFamily: "Arial", padding: "2rem" }}>
      {/* Main Content */}
      <main style={{ flex: 3, marginRight: "2rem" }}>
        <header style={{ marginBottom: "1rem" }}>
          <h1>💬 Community Forum</h1>
          <input
            type="text"
            value={search}
            placeholder="Search posts..."
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginTop: "0.5rem", padding: "0.5rem", width: "100%" }}
          />
        </header>

        <nav style={{ marginBottom: "1rem" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                marginRight: "0.5rem",
                background: activeCategory === cat ? "#0070f3" : "#eee",
                color: activeCategory === cat ? "#fff" : "#000",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </nav>

        <section>
          <h2>{activeCategory} Posts</h2>
          {filteredPosts.length > 0 ? (
            <ul>
              {filteredPosts.map((p, i) => (
                <li key={i}>{p.title}</li>
              ))}
            </ul>
          ) : (
            <p>No posts found in this category.</p>
          )}
        </section>
      </main>

      {/* Sidebar */}
      <aside style={{ flex: 1 }}>
        <h3>🔥 Trending</h3>
        <ul>
          {trending.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
