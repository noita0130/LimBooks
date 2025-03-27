// components/CategoryButton.jsx
import React, { memo } from 'react';
import { buttonTransition } from '../TransitionStyles';

const CategoryButton = memo(({ category, label, isActive, onClick, darkMode }) => {
  const buttonStyle = `px-3 py-2 rounded-md text-sm md:text-base ${buttonTransition} 
    ${darkMode
      ? isActive
        ? 'bg-neutral-600 text-white'
        : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
      : isActive
        ? 'bg-neutral-300 text-black'
        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
    } flex items-center gap-2`;

  return (
    <button
      onClick={() => onClick(category)}
      className={buttonStyle}
    >
      <img 
        src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/Keyword/${category}.png`} 
        alt={`${category} icon`}
        className="w-4 h-4 object-contain"
        onError={(e) => {
          e.target.src = `https://placehold.co/16x16/gray/white?text=${category.charAt(0).toUpperCase()}`;
        }}
      />
      {label}
    </button>
  );
});

export default CategoryButton;