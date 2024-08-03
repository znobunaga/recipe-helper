// src/components/SearchBar.js

import React from 'react';

// SearchBar component - provides an input field and a button for searching meals
// Props:
// - onSearch: function to be called with the search term when the search button is clicked
const SearchBar = ({ onSearch }) => {
  // function to handle the search action
  const handleSearch = () => {
    const inputField = document.getElementById('inputField').value; // get the value from the input field
    onSearch(inputField); // call the onSearch function with the input value
  };

  return (
    <div id="searchBox" className="container mx-auto py-6"> {/* container for the search bar */}
      <div className="w-full max-w-md mx-auto"> 
        <div className="flex items-center border-b border-teal-500 py-2"> 
          <input
            id="inputField"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-3 leading-tight focus:outline-none rounded-l-md" // Styling for the input field
            type="text"
            placeholder="Search for a meal..." 
          />
          <button
            id="searchBtn"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r-md" // styling for the search button
            type="button"
            onClick={handleSearch} // call handleSearch when the button is clicked
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
