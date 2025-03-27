// components/Egogift/MobileGiftList.jsx
import React from 'react';
import MobileGiftCard from './MobileGiftCard';

const MobileGiftList = ({ gifts, darkMode }) => {
  // No results message styling
  const noResultsStyle = `w-full text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`;

  // 스크롤바 스타일 CSS를 정의
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

  // 스크롤바 스타일
  const scrollbarStyle = {
    scrollbarWidth: 'thin',
    scrollbarColor: 'transparent transparent', /* 투명 스크롤바 */
  };

  return (
    <div className="w-full">
      {/* 스크롤바 스타일을 위한 내장 스타일 태그 */}
      <style>{scrollbarCSS}</style>
      
      {/* 스크롤 가능한 리스트 컨테이너 */}
      <div 
        className="overflow-y-auto max-h-[calc(100vh-220px)] custom-scrollbar" 
        style={scrollbarStyle}
      >
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