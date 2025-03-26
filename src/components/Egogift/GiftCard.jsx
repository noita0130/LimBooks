// components/GiftCard.jsx
import React, { memo } from 'react';
import { textTransition, backgroundTransition } from '../TransitionStyles';

const GiftCard = memo(({ gift, onClick, darkMode, isSmallScreen }) => {
  const cardStyle = `${backgroundTransition} cursor-pointer 
    ${darkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-white hover:bg-neutral-100'} 
    rounded-lg shadow-md overflow-hidden w-full h-32 flex flex-col`;

  return (
    <div onClick={() => onClick(gift)} className="w-full flex justify-center">
      <div className={cardStyle}>
        <div className="h-20 w-full flex justify-center overflow-hidden pt-2">
          <img
            src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/egogift/square/${gift.id}.webp`}
            alt={gift.name}
            className="w-auto h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://placehold.co/100x100/gray/white?text=No+Image';
            }}
          />
        </div>
        <div className="px-2 pb-2 flex-1 flex items-center justify-center">
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