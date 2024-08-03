// src/components/MealDetails.js

import React, { useEffect, useRef } from 'react';

// MealDetails component - displays detailed information about a meal
// props:
// - meal: object containing meal details (e.g., name, image, ingredients)
const MealDetails = ({ meal }) => {
  const mealRef = useRef(null); // reference to the meal details container

  // useEffect hook to scroll the meal details into view when the meal changes
  useEffect(() => {
    if (mealRef.current) {
      mealRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [meal]); // dependency array includes the meal, so the effect runs when the meal changes

  return (
    <div id="mealDetails" className="bg-gray-100 rounded-lg p-5 shadow-lg" ref={mealRef}>
      <img
        src={meal.strMealThumb} // image source from meal details
        className="w-full h-48 object-cover rounded" 
        alt={meal.strMeal} 
      />
      <div className="item-details mt-5"> {/* Container for the meal name and ingredients */}
        <h3 className="text-2xl font-bold">{meal.strMeal}</h3> 
        <b className="block mt-2 mb-1">Ingredients</b> 
        <ul className="list-disc pl-5 mt-3"> 
          {[
            meal.strIngredient1, meal.strIngredient2, meal.strIngredient3,
            meal.strIngredient4, meal.strIngredient5, meal.strIngredient6,
            meal.strIngredient7, meal.strIngredient8, meal.strIngredient9,
            meal.strIngredient10
          ].filter(Boolean).map((ingredient, index) => ( // filter out empty ingredients and map over the array
            <li key={index}>{ingredient}</li> // display each ingredient in a list item
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MealDetails;
