// components/CategorySelector.jsx
import React, { memo } from 'react';
import CategoryButton from './CategoryButton';

const CategorySelector = memo(({ categories, categoryLabels, selectedCategories, toggleCategory, darkMode }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          label={categoryLabels[category] || category}
          isActive={selectedCategories.includes(category)}
          onClick={toggleCategory}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
});

export default CategorySelector;