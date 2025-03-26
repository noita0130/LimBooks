// components/DesktopGiftGrid.jsx
import React, { memo } from 'react';
import GiftCard from './GiftCard';

const DesktopGiftGrid = memo(({ gifts, gridStyle, handleGiftClick, darkMode }) => {
  if (gifts.length === 0) {
    return (
      <div className="col-span-full text-center py-8">
        검색 결과가 없습니다.
      </div>
    );
  }

  return (
    <div className="grid-container" style={gridStyle}>
      {gifts.map((gift, index) => (
        <GiftCard
          key={`${gift.id || gift.name}-${index}`}
          gift={gift}
          onClick={handleGiftClick}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
});

export default DesktopGiftGrid;