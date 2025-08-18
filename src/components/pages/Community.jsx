import React, { useState, useEffect, useRef, useCallback } from "react";

// API call simulation utility
const fetchCommunityPosts = async (count = 10) => {
  const categories = ["Announcements", "Discussions", "Help", "Showcase"];
  const userNames = ["Alice", "Bob", "Charlie", "Dana", "Eve"];
  const generatePost = (id) => ({
    id,
    title: `Post #${id}: ${
      Math.random() > 0.5 ? "A question about React" : "Sharing a cool project!"
    }`,
    content: `This is a randomly generated post content. It's designed to be a bit longer to simulate real data. Here's a little more filler text to reach the desired length and make it look more realistic. We can talk about hooks, state management, or component lifecycles.`,
    author: userNames[Math.floor(Math.random() * userNames.length)],
    category: categories[Math.floor(Math.random() * categories.length)],
    likes: Math.floor(Math.random() * 500),
    comments: Math.floor(Math.random() * 100),
    timestamp: new Date(
      Date.now() - Math.floor(Math.random() * 86400000 * 30)
    ).toLocaleString(),
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      const posts = Array.from({ length: count }, (_, i) =>
        generatePost(i + 1)
      );
      resolve(posts);
    }, 1500);
  });
};

// Component for a single community post card
const PostCard = React.memo(({ post, onLike }) => {
  const handleLike = () => {
    onLike(post.id);
  };

  return (
    <div className="post-card">
      <h3 className="post-title">{post.title}</h3>
      <div className="post-meta">
        <span className="post-author">By: {post.author}</span>
        <span className="post-category">Category: {post.category}</span>
      </div>
      <p className="post-content">{post.content.substring(0, 150)}...</p>
      <div className="post-actions">
        <button onClick={handleLike} className="like-button">
          👍 Like ({post.likes})
        </button>
        <span className="comment-count">💬 {post.comments} Comments</span>
        <span className="post-timestamp">{post.timestamp}</span>
      </div>
    </div>
  );
});

// Main Community Board Component
const CommunityBoard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("timestamp");
  const postContainerRef = useRef(null);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const fetchedPosts = await fetchCommunityPosts(50);
      setPosts(fetchedPosts);
      setLoading(false);
    };
    loadPosts();
  }, []);

  const handleLikePost = useCallback((postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = filter === "All" || post.category === filter;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedPosts = filteredPosts.sort((a, b) => {
    if (sortBy === "likes") return b.likes - a.likes;
    if (sortBy === "comments") return b.comments - a.comments;
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  if (loading) {
    return <div className="loading-message">Loading community content...</div>;
  }

  return (
    <div className="community-board-container">
      <h1 className="board-title">Community Board</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Categories</option>
          <option value="Announcements">Announcements</option>
          <option value="Discussions">Discussions</option>
          <option value="Help">Help</option>
          <option value="Showcase">Showcase</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="timestamp">Newest</option>
          <option value="likes">Most Liked</option>
          <option value="comments">Most Commented</option>
        </select>
      </div>
      <div ref={postContainerRef} className="post-list">
        {sortedPosts.length > 0 ? (
          sortedPosts.map((post) => (
            <PostCard key={post.id} post={post} onLike={handleLikePost} />
          ))
        ) : (
          <div className="no-results-message">
            No posts found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityBoard;
