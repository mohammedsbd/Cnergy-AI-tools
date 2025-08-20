import React, { useState } from "react";

function GitHubExplorer() {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRepos = async () => {
    if (!username.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await res.json();
      setRepos(data);
      setIssues([]);
    } catch {
      setRepos([]);
    }
    setLoading(false);
  };

  const fetchIssues = async (repo) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.github.com/repos/${username}/${repo}/issues`
      );
      const data = await res.json();
      setIssues(data);
    } catch {
      setIssues([]);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>GitHub Repo Explorer</h2>
      <input
        placeholder="GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchRepos} disabled={loading}>
        {loading ? "Loading repos..." : "Fetch Repositories"}
      </button>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div style={{ flex: 1, marginRight: "20px" }}>
          <h3>Repositories</h3>
          <ul>
            {repos.map((repo) => (
              <li
                key={repo.id}
                onClick={() => fetchIssues(repo.name)}
                style={{ cursor: "pointer" }}
              >
                {repo.name}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Issues</h3>
          <ul>
            {issues.map((issue) => (
              <li key={issue.id}>
                <strong>{issue.title}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GitHubExplorer;
