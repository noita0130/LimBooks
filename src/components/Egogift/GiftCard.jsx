// components/GiftCard.jsx
import React, { memo } from 'react';
import { textTransition, backgroundTransition } from '../TransitionStyles';

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

const GiftCard = memo(({ gift, onClick, darkMode, isSmallScreen }) => {
  const cardStyle = `${backgroundTransition} cursor-pointer 
    ${darkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-white hover:bg-neutral-100'} 
    rounded-lg shadow-md overflow-hidden w-full h-32 flex flex-col relative`;

  // 그룹 타입 가져오기
  const groupType = getGroupType(gift, window.egogiftData);

  return (
    <div onClick={() => onClick(gift)} className="w-full flex justify-center">
      <div className={cardStyle}>
        <div className="h-20 w-full flex justify-center overflow-hidden pt-2 relative">
          {/* 랭크 표시 (이미지의 왼쪽 상단) */}
          {gift.grade && (
            <div className="absolute top-2 left-1/2 transform -translate-x-10 w-6 h-6 z-10 rounded-full overflow-hidden">
              <img 
                src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/Keyword/rank_${gift.grade}.webp`} 
                alt={`Rank ${gift.grade}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = `https://placehold.co/24x24/orange/white?text=${gift.grade}`;
                }}
              />
            </div>
          )}

          {/* 그룹 표시 (이미지의 오른쪽 하단) */}
          {groupType && (
            <div className="absolute bottom-0 left-1/2 transform translate-x-4 w-6 h-6 z-10 rounded-full overflow-hidden">
              <img 
                src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/Keyword/${groupType}.webp`}
                alt={groupType}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = `https://placehold.co/24x24/blue/white?text=${groupType.charAt(0).toUpperCase()}`;
                }}
              />
            </div>
          )}

          <img
            src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/egogift/square/${gift.id}.webp`}
            alt={gift.name}
            className="w-auto h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://placehold.co/100x100/gray/white?text=No+Image';
            }}
          />
        </div>
        <div className="p-2 flex-1 flex items-center justify-center">
          <p className={`text-xs leading-tight break-words text-center ${textTransition} 
                      ${darkMode ? 'text-white' : 'text-black'}`}>
            {gift.name}
          </p>
        </div>
      </div>
    </div>
  );
});

export default GiftCard;