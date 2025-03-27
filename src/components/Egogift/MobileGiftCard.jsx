// components/MobileGiftItem.jsx
import React, { memo, useState } from 'react';
import { backgroundTransition, textTransition } from '../TransitionStyles';
import DetailPanel from './DetailPanel';

// 그룹 타입을 확인하는 헬퍼 함수
const getGroupType = (gift, egogiftData) => {
  // 어떤 그룹에 속하는지 확인
  let groupType = '';
  for (const [group, gifts] of Object.entries(egogiftData || {})) {
    if (gifts && gifts.some(g => g.id === gift.id)) {
      groupType = group;
      break;
    }
  }
  return groupType; // toLowerCase 제거 - 원본 영어 그대로 반환
};

const MobileGiftCard = memo(({ gift, darkMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const cardStyle = `${backgroundTransition} cursor-pointer 
    ${darkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-white hover:bg-neutral-100'} 
    rounded-lg shadow-md overflow-hidden w-full flex items-center mb-2`;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const closeDetail = () => {
    setIsExpanded(false);
  };

  // 그룹 타입 가져오기
  const groupType = getGroupType(gift, window.egogiftData);

  return (
    <>
      <div onClick={toggleExpand} className={cardStyle}>
        <div className="h-16 w-16 overflow-hidden relative">
          <img
            src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/egogift/square/${gift.id}.webp`}
            alt={gift.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://placehold.co/100x100/gray/white?text=No+Image';
            }}
          />
          
          {/* 랭크 표시 (왼쪽 상단) */}
          {gift.grade && (
            <div className="absolute top-1 left-1 w-4 h-4 z-10 rounded-full overflow-hidden">
              <img 
                src={`/icons/rank/${gift.grade}.png`} 
                alt={`Rank ${gift.grade}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = `https://placehold.co/16x16/orange/white?text=${gift.grade}`;
                }}
              />
            </div>
          )}

          {/* 그룹 표시 (오른쪽 하단) - 원본 영어 경로 사용 */}
          {groupType && (
            <div className="absolute bottom-1 right-1 w-4 h-4 z-10 rounded-full overflow-hidden">
              <img 
                src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/Keyword/${groupType}.webp`}
                alt={groupType}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = `https://placehold.co/16x16/blue/white?text=${groupType.charAt(0).toUpperCase()}`;
                }}
              />
            </div>
          )}
        </div>
        <div className="p-2 flex-1">
          <p className={`${textTransition} ${darkMode ? 'text-white' : 'text-black'}`}>
            {gift.name}
          </p>
          <p className={`text-xs ${textTransition} ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {gift.grade}
          </p>
        </div>
        <div className="pr-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 ${textTransition} ${darkMode ? 'text-gray-400' : 'text-gray-600'} transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* 확장 영역 - 기기가 작을 때만 보임 */}
      {isExpanded && (
        <div className={`${backgroundTransition} overflow-hidden transition-all duration-300 ease-in-out`}>
          <DetailPanel 
            gift={gift} 
            darkMode={darkMode} 
            onClose={closeDetail}
            isSmallScreen={true}
          />
        </div>
      )}
    </>
  );
});

export default MobileGiftCard;