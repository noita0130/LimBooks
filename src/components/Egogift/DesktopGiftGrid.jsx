// components/Egogift/DesktopGiftGrid.jsx
import React from 'react';
import GiftCard from './GiftCard';

const DesktopGiftGrid = ({ gifts, gridStyle, handleGiftClick, darkMode }) => {
  // 결과 없음 메시지 스타일링
  const noResultsStyle = `w-full text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`;

  return (
    <div className="w-full h-full flex flex-col">
      <div className="overflow-y-auto max-h-[calc(100vh-220px)]" style={{ scrollbarWidth: 'thin' }}>
        {gifts.length > 0 ? (
          <div style={gridStyle}>
            {gifts.map((gift) => (
              <GiftCard
                key={gift.id}
                gift={gift}
                onClick={handleGiftClick}
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

export default DesktopGiftGrid;