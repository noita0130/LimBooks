// components/Egogift/DesktopGiftGrid.jsx
import React from 'react';
import GiftCard from './GiftCard';

const DesktopGiftGrid = ({ gifts, gridStyle, handleGiftClick, darkMode }) => {
  // 결과 없음 메시지 스타일링
  const noResultsStyle = `w-full text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`;

  // 스크롤바 스타일 CSS를 정의
  const scrollbarStyle = {
    scrollbarWidth: 'thin',
    scrollbarColor: '#444444 transparent', /* 투명 스크롤바 */
  };

  // 브라우저 간 호환성을 위한 추가 스타일
  const scrollbarCSS = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: rgba(155, 155, 155, 0.2);
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: rgba(155, 155, 155, 0.3);
    }
  `;

  return (
    <div className="w-full h-full flex flex-col">
      {/* 스크롤바 스타일을 위한 내장 스타일 태그 */}
      <style>{scrollbarCSS}</style>
      
      <div 
        className="overflow-y-auto h-screen custom-scrollbar" 
        style={scrollbarStyle}
      >
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