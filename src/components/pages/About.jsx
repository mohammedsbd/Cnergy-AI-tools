import React, { useState } from "react";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const searchMovies = () => {
    fetch(`https://www.omdbapi.com/?apikey=YOUR_KEY&s=${query}`)
      .then((res) => res.json())
      .then((data) => setResults(data.Search || []));
  };

  return (
    <div>
      <h2>Movie Explorer</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button onClick={searchMovies}>Search</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {results.map((movie) => (
          <div key={movie.imdbID} style={{ margin: "10px" }}>
            <h4>{movie.Title}</h4>
            {movie.Poster !== "N/A" && (
              <img src={movie.Poster} alt={movie.Title} width="100" />
            )}
            <button onClick={() => setFavorites((f) => [...f, movie])}>
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
      {favorites.length > 0 && (
        <div>
          <h3>Favorites</h3>
          <ul>
            {favorites.map((f) => (
              <li key={f.imdbID}>{f.Title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieSearch;
