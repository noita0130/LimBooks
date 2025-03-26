// components/GiftCard.jsx
import React, { memo } from 'react';
import { textTransition, backgroundTransition } from '../TransitionStyles';

const GiftCard = memo(({ gift, onClick, darkMode, isSmallScreen }) => {
  const cardStyle = `${backgroundTransition} cursor-pointer 
    ${darkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-white hover:bg-neutral-100'} 
    rounded-lg shadow-md overflow-hidden w-full h-28 flex flex-col`;

  return (
    <div onClick={() => onClick(gift)} className="w-full flex justify-center">
      <div className={cardStyle}>
        <div className="h-24 w-full overflow-hidden">
          <img
            src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/egogift/${gift.id}.webp`}
            alt={gift.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://placehold.co/100x100/gray/white?text=No+Image';
            }}
          />
        </div>
        <div className="p-1 h-10 flex-1 flex items-center justify-center">
          <p className={`text-xs break-words text-center ${textTransition} 
                      ${darkMode ? 'text-white' : 'text-black'}`}>
            {gift.name}
          </p>
        </div>
      </div>
    </div>
  );
});

export default GiftCard;