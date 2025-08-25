import React, { useState } from 'react';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Handle search logic
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        production-ready="Search..."
        className="p-2 border rounded-l"
        aria-label="Search"
      />
      <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded-r">
        Search
      </button>
    </div>
  );
};

export default Search;
