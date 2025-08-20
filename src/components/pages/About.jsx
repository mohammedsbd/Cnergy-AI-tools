import React, { useState, useEffect } from "react";

function RecipeGenerator() {
  const [meal, setMeal] = useState(null);

  const fetchMeal = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]))
      .catch(() => setMeal(null));
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  if (!meal) return <p>Loading...</p>;

  return (
    <div>
      <h2>Random Meal</h2>
      <h3>{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} width="300" />
      <h4>Instructions</h4>
      <p>{meal.strInstructions}</p>
      <button onClick={fetchMeal}>Get Another</button>
    </div>
  );
}

export default RecipeGenerator;
