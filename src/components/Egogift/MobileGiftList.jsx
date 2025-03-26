// components/MobileGiftList.jsx
import React, { memo } from 'react';
import MobileGiftCard from './MobileGiftCard';

const MobileGiftList = memo(({ gifts, darkMode }) => {
  console.log('MobileGiftList rendering with', gifts.length, 'gifts');
  
  if (gifts.length === 0) {
    return (
      <div className="text-center py-8 w-full">
        검색 결과가 없습니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-2 w-full">
      {gifts.map((gift, index) => (
        <MobileGiftCard 
          key={`${gift.id || gift.name}-${index}`} 
          gift={gift} 
          darkMode={darkMode}
        />
      ))}
    </div>
  );
});

export default MobileGiftList;