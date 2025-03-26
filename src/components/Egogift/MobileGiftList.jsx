// components/MobileGiftList.jsx
import React, { memo } from 'react';
import MobileGiftItem from './MobileGiftCard';

const MobileGiftList = memo(({ gifts, darkMode }) => {
  if (gifts.length === 0) {
    return (
      <div className="text-center py-8">
        검색 결과가 없습니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-2">
      {gifts.map((gift, index) => (
        <MobileGiftItem 
          key={`${gift.id || gift.name}-${index}`} 
          gift={gift} 
          darkMode={darkMode}
        />
      ))}
    </div>
  );
});

export default MobileGiftList;