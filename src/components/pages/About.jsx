import React, { useState, useEffect } from "react";

function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => setPokemon(data.results));
  }, []);

  return (
    <div>
      <h2>Pokédex Explorer</h2>
      <input
        placeholder="Search Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {pokemon
          .filter((p) => p.name.includes(search.toLowerCase()))
          .map((p, i) => (
            <li
              key={i}
              onClick={() =>
                fetch(p.url)
                  .then((res) => res.json())
                  .then((data) => setSelected(data))
              }
            >
              {p.name}
            </li>
          ))}
      </ul>
      {selected && (
        <div>
          <h3>{selected.name}</h3>
          <img src={selected.sprites.front_default} alt={selected.name} />
          <p>
            Height: {selected.height} | Weight: {selected.weight}
          </p>
        </div>
      )}
    </div>
  );
}

export default Pokedex;
