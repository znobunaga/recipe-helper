// src/App.js

import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import MealCard from './components/MealCard';
import MealDetails from './components/MealDetails';

// App component - main component of the application
const App = () => {
  // state for storing meals fetched from the API
  const [meals, setMeals] = useState([]);
  // state for storing the currently selected meal
  const [selectedMeal, setSelectedMeal] = useState(null);

  // function to fetch meals based on a search query
  const fetchMeals = async (query) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      setMeals(response.data.meals || []); // update meals state with fetched data or an empty array if no meals are found
    } catch (error) {
      console.error("Error fetching meals:", error);
      setMeals([]); // clear meals state in case of an error
    }
  };

  // function to handle clicking on a meal card
  const handleMealClick = (meal) => {
    setSelectedMeal(meal); // update selectedMeal state with the clicked meal
  };

  return (
    <div>
      <Header /> 
      <main className="container mx-auto py-6 px-4 flex">
        {/* meal Cards Section */}
        <div className="flex-1 mr-6">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for a meal..."
              onChange={(e) => fetchMeals(e.target.value)} // fetch meals as the user types in the search input
              className="w-full p-3 border rounded"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* map over meals and render a MealCard for each meal */}
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} onClick={handleMealClick} />
            ))}
          </div>
        </div>
        {/* meal Details Section */}
        <div className="flex-1">
          {/* render MealDetails component if a meal is selected */}
          {selectedMeal && <MealDetails meal={selectedMeal} />}
        </div>
      </main>
    </div>
  );
};

export default App;
