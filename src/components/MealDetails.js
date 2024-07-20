// src/components/MealDetails.js

import React, { useEffect, useRef } from 'react';

const MealDetails = ({ meal }) => {
  const mealRef = useRef(null);

  useEffect(() => {
    if (mealRef.current) {
      mealRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [meal]);

  return (
    <div id="mealDetails" className="bg-gray-100 rounded-lg p-5 shadow-lg">
      <img
        src={meal.strMealThumb}
        className="w-full h-48 object-cover rounded"
        alt={meal.strMeal}
      />
      <div className="item-details mt-5">
        <h3 className="text-2xl font-bold">{meal.strMeal}</h3>
        <b className="block mt-2 mb-1">Ingredients</b>
        <ul className="list-disc pl-5 mt-3">
          {[
            meal.strIngredient1, meal.strIngredient2, meal.strIngredient3,
            meal.strIngredient4, meal.strIngredient5, meal.strIngredient6,
            meal.strIngredient7, meal.strIngredient8, meal.strIngredient9,
            meal.strIngredient10
          ].filter(Boolean).map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MealDetails;
