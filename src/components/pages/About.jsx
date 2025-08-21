import React, { useState } from "react";

const RecipeSubmissionForm = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    prepTime: "",
    cookTime: "",
    servings: 1,
    ingredients: "",
    instructions: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe Submitted:", recipe);
    alert("Thank you for your submission! Your recipe is under review.");
    // Reset form
    setRecipe({
      title: "",
      description: "",
      prepTime: "",
      cookTime: "",
      servings: 1,
      ingredients: "",
      instructions: "",
      imageUrl: "",
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Submit a Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            required
            className="mt-1 w-full p-3 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Short Description
          </label>
          <textarea
            name="description"
            value={recipe.description}
            onChange={handleChange}
            rows="3"
            required
            className="mt-1 w-full p-3 border rounded-md"
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Prep Time
            </label>
            <input
              type="text"
              name="prepTime"
              value={recipe.prepTime}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Cook Time
            </label>
            <input
              type="text"
              name="cookTime"
              value={recipe.cookTime}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Servings
            </label>
            <input
              type="number"
              name="servings"
              value={recipe.servings}
              onChange={handleChange}
              min="1"
              required
              className="mt-1 w-full p-3 border rounded-md"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Ingredients (one per line)
          </label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            rows="6"
            required
            className="mt-1 w-full p-3 border rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Instructions (one per line)
          </label>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            rows="8"
            required
            className="mt-1 w-full p-3 border rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            name="imageUrl"
            value={recipe.imageUrl}
            onChange={handleChange}
            className="mt-1 w-full p-3 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeSubmissionForm;
