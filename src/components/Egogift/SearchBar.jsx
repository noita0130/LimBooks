// components/SearchBar.jsx
import React, { memo } from 'react';
import { backgroundTransition } from '../TransitionStyles';

const SearchBar = memo(({ searchQuery, setSearchQuery, darkMode }) => {
  const searchInputStyle = `w-full px-3 py-2 rounded-md text-sm ${backgroundTransition} 
    ${darkMode ? 'bg-neutral-800 text-white border-neutral-700' : 'bg-white text-black border-neutral-200'} 
    border focus:outline-none focus:ring-2 focus:ring-blue-500`;

  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="이름으로 검색..."
        className={searchInputStyle}
      />
    </div>
  );
});

export default SearchBar;