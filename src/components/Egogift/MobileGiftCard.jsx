// components/MobileGiftItem.jsx
import React, { memo, useState } from 'react';
import { backgroundTransition, textTransition } from '../TransitionStyles';
import DetailPanel from './DetailPanel';

const MobileGiftCard = memo(({ gift, darkMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // gift가 undefined인 경우 예외 처리
  if (!gift) {
    console.error('MobileGiftItem received undefined gift');
    return null;
  }

  const cardStyle = `${backgroundTransition} cursor-pointer 
    ${darkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-white hover:bg-neutral-100'} 
    rounded-lg shadow-md overflow-hidden w-full flex items-center mb-2`;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const closeDetail = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <div onClick={toggleExpand} className={cardStyle}>
        <div className="h-16 w-16 overflow-hidden">
          <img
            src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/egogift/${gift.id}.webp`}
            alt={gift.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://placehold.co/100x100/gray/white?text=No+Image';
            }}
          />
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