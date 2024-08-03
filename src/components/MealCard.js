// src/components/MealCard.js

import React from 'react';

// MealCard component - displays individual meal information
// props:
// - meal: object containing meal details (e.g., name, image)
// - onClick: function to be called when the meal card is clicked
const MealCard = ({ meal, onClick }) => (
  <div
    className="meal-box bg-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer transform hover:scale-105 transition-transform mx-2 my-2" // Styling for the meal card with hover effect and margin
    onClick={() => onClick(meal)} // trigger onClick function with meal details when clicked
  >
    <img
      className="w-full h-32 object-cover rounded-t-lg" // Styling for the meal image
      src={meal.strMealThumb} // image source from meal details
      alt={meal.strMeal} 
    />
    <div className="p-4 text-center">
      <h5 className="text-lg font-bold">{meal.strMeal}</h5> {/* Meal name */}
    </div>
  </div>
);

export default MealCard;
