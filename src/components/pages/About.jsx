function BlogPreviewList({ posts }) {
  return (
    <div>
      <h2>Latest Posts</h2>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "2rem" }}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <button onClick={() => alert(`Reading: ${post.title}`)}>
            Read More
          </button>
        </div>
      ))}
    </div>
  );
}
export default BlogPreviewList;