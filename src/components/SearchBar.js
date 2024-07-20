// src/components/SearchBar.js

import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = () => {
    const inputField = document.getElementById('inputField').value;
    onSearch(inputField);
  };

  return (
    <div id="searchBox" className="container mx-auto py-6">
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            id="inputField"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-3 leading-tight focus:outline-none rounded-l-md"
            type="text"
            placeholder="Search for a meal..."
          />
          <button
            id="searchBtn"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r-md"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
