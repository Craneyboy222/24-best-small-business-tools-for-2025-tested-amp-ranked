import React from 'react';

type SortProps = {
  options: { value: string; label: string }[];
  onSortChange: (selected: string) => void;
};

const Sort: React.FC<SortProps> = ({ options, onSortChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="sort" className="mb-2">Sort by</label>
      <select
        id="sort"
        onChange={(e) => onSortChange(e.target.value)}
        className="p-2 border rounded"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
