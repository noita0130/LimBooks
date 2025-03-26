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
    }`;

  return (
    <button
      onClick={() => onClick(category)}
      className={buttonStyle}
    >
      {label}
    </button>
  );
});

export default CategoryButton;