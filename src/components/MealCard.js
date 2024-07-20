// src/components/MealCard.js

import React from 'react';

const MealCard = ({ meal, onClick }) => (
  <div
    className="meal-box bg-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer transform hover:scale-105 transition-transform mx-2 my-2" // Smaller size and margin
    onClick={() => onClick(meal)}
  >
    <img
      className="w-full h-32 object-cover rounded-t-lg" // Smaller image size
      src={meal.strMealThumb}
      alt={meal.strMeal}
    />
    <div className="p-4 text-center">
      <h5 className="text-lg font-bold">{meal.strMeal}</h5>
    </div>
  </div>
);

export default MealCard;
