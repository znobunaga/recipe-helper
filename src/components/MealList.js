// src/components/MealList.js

import React from 'react';
import MealCard from './MealCard';

const MealList = ({ meals, onMealClick }) => (
  <div id="mealDetailSection" className="container mx-auto py-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {meals.length > 0 ? (
        meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} onClick={onMealClick} />
        ))
      ) : (
        <div className="text-center col-span-full mt-5">
          Sorry, no meals found!
        </div>
      )}
    </div>
  </div>
);

export default MealList;
