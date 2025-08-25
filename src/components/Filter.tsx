import React from 'react';

type FilterProps = {
  categories: string[];
  onFilterChange: (selected: string) => void;
};

const Filter: React.FC<FilterProps> = ({ categories, onFilterChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="category" className="mb-2">Filter by Category</label>
      <select
        id="category"
        onChange={(e) => onFilterChange(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
