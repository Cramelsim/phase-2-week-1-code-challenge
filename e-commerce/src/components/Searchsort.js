import React from 'react';

function SearchSort({ searchTerm, setSearchTerm, handleSort, sortConfig }) {
  return (
    <div className="search-sort">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => handleSort('name')}>
        Sort by Name {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
      </button>
      <button onClick={() => handleSort('price')}>
        Sort by Price {sortConfig.key === 'price' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
      </button>
    </div>
  );
}

export default SearchSort;