// src/components/FilterButtons.js
import React from 'react';

function FilterButtons({ currentFilter, setFilter }) {
  return (
    <div className="flex justify-center space-x-2 my-4">
      <button 
        onClick={() => setFilter('all')}
        className={`px-3 py-1 rounded ${
          currentFilter === 'all' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        すべて
      </button>
      <button 
        onClick={() => setFilter('active')}
        className={`px-3 py-1 rounded ${
          currentFilter === 'active' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        未完了
      </button>
      <button 
        onClick={() => setFilter('completed')}
        className={`px-3 py-1 rounded ${
          currentFilter === 'completed' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        完了済み
      </button>
    </div>
  );
}

export default FilterButtons;