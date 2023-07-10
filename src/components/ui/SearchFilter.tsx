import React from 'react';

interface FilterOptions {
  filterText: string;
  onFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

const FilterComponent: React.FC<FilterOptions> = ({
  filterText,
  onFilter,
  onClear,
}) => (
  <div className='flex items-center'>
    <input
      id='search'
      type='text'
      className='border-2 border-gray-300 rounded px-3 focus:outline-none'
      placeholder='Filter table data...'
      value={filterText}
      onChange={onFilter}
    />
    <button
      className='rounded bg-gray-100 px-2 py-1.5 text-xs'
      onClick={onClear}
    >
      ✖
    </button>
  </div>
);

export default FilterComponent;
