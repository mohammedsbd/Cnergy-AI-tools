import React, { useState } from "react";

const RecipeSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ cuisine: "", difficulty: "" });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm, filters);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-8"
    >
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for recipes..."
          className="flex-1 p-3 border rounded-md"
        />
        <select
          name="cuisine"
          value={filters.cuisine}
          onChange={handleFilterChange}
          className="p-3 border rounded-md"
        >
          <option value="">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="Asian">Asian</option>
          <option value="American">American</option>
        </select>
        <select
          name="difficulty"
          value={filters.difficulty}
          onChange={handleFilterChange}
          className="p-3 border rounded-md"
        >
          <option value="">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default RecipeSearchBar;
