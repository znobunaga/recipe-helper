// src/App.js

import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import MealCard from './components/MealCard';
import MealDetails from './components/MealDetails';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const fetchMeals = async (query) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      setMeals(response.data.meals || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
      setMeals([]);
    }
  };

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto py-6 px-4 flex">
        {/* Meal Cards Section */}
        <div className="flex-1 mr-6">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for a meal..."
              onChange={(e) => fetchMeals(e.target.value)}
              className="w-full p-3 border rounded"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} onClick={handleMealClick} />
            ))}
          </div>
        </div>
        {/* Meal Details Section */}
        <div className="flex-1">
          {selectedMeal && <MealDetails meal={selectedMeal} />}
        </div>
      </main>
    </div>
  );
};

export default App;
