// components/Egogift/MobileGiftList.jsx
import React from 'react';
import MobileGiftCard from './MobileGiftCard';

const MobileGiftList = ({ gifts, darkMode }) => {
  // No results message styling
  const noResultsStyle = `w-full text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`;

  return (
    <div className="w-full">
      {/* 스크롤 가능한 리스트 컨테이너 */}
      <div className="overflow-y-auto max-h-[calc(100vh-220px)]" style={{ scrollbarWidth: 'thin' }}>
        {gifts.length > 0 ? (
          <div className="space-y-2">
            {gifts.map((gift) => (
              <MobileGiftCard
                key={gift.id}
                gift={gift}
                darkMode={darkMode}
              />
            ))}
          </div>
        ) : (
          <div className={noResultsStyle}>
            <p>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileGiftList;