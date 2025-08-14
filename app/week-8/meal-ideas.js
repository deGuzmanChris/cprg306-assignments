"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null); // for meal details

  // Fetch meals that include the ingredient
  const fetchMealIdeas = async (ingredient) => {
    if (!ingredient) return [];
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await res.json();
    return data.meals || [];
  };

  // Fetch full meal details
  const fetchMealDetails = async (idMeal) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const data = await res.json();
    return data.meals[0];
  };

  // Load meals whenever ingredient changes
  useEffect(() => {
    const loadMealIdeas = async () => {
      setSelectedMeal(null); // reset selected meal
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    };
    loadMealIdeas();
  }, [ingredient]);

  const handleMealClick = async (meal) => {
    const details = await fetchMealDetails(meal.idMeal);
    setSelectedMeal(details);
  };

  // Extract ingredients from meal details
  const renderIngredients = (meal) => {
    if (!meal) return null;
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    return ingredients;
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Meal Ideas for: {ingredient}</h2>

      <ul>
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="cursor-pointer bg-gray-300 p-2 m-2 border rounded hover:bg-indigo-200"
            onClick={() => handleMealClick(meal)}
          >
            {meal.strMeal}
          </li>
        ))}
      </ul>

      {selectedMeal && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h3 className="text-lg font-bold mb-2">{selectedMeal.strMeal}</h3>
          <img
            src={selectedMeal.strMealThumb}
            alt={selectedMeal.strMeal}
            className="w-48 mb-2"
          />
          <h4 className="font-semibold">Ingredients:</h4>
          <ul>
            {renderIngredients(selectedMeal).map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
          <h4 className="font-semibold mt-2">Instructions:</h4>
          <p>{selectedMeal.strInstructions}</p>
        </div>
      )}
    </div>
  );
}
