// components/EgogiftPage.jsx
import { useState } from 'react';
import useDarkMode from '../hooks/useDarkmode';
import { backgroundTransition, textTransition, buttonTransition } from '../components/TransitionStyles';
import egogiftData from '../data/egogiftData';

const EgogiftPage = () => {
  const { darkMode } = useDarkMode();
  const [selectedCategory, setSelectedCategory] = useState('Burn');
  const [selectedGift, setSelectedGift] = useState(null);
  
  // Get all categories from egogiftData
  const categories = Object.keys(egogiftData);
  
  const handleGiftClick = (gift) => {
    setSelectedGift(gift);
  };
  
  const getCardStyle = () => `${backgroundTransition} cursor-pointer 
    ${darkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-white hover:bg-neutral-100'} 
    rounded-lg shadow-md overflow-hidden w-24 h-24 flex flex-col`;
  
  const getDetailCardStyle = () => `${backgroundTransition}
    ${darkMode ? 'bg-neutral-800' : 'bg-white'}
    rounded-lg shadow-md overflow-hidden h-full p-4`;
  
  const getCategoryButtonStyle = (isActive) => `px-3 py-2 rounded-md text-sm md:text-base ${buttonTransition} 
    ${darkMode 
      ? isActive 
        ? 'bg-neutral-600 text-white' 
        : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700' 
      : isActive 
        ? 'bg-neutral-300 text-black' 
        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
    }`;

  return (
    <div className={`min-h-screen rounded-lg p-4 md:p-6 ${backgroundTransition} 
      ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'}`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-xl font-bold mb-6 ${textTransition} 
          ${darkMode ? 'text-white' : 'text-black'}`}>
          EGO Gift List
        </h1>
        
        {/* Category selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedGift(null);
              }}
              className={getCategoryButtonStyle(category === selectedCategory)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Grid of EGO gifts */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {egogiftData[selectedCategory] && egogiftData[selectedCategory].map((gift, index) => (
                <div key={index} onClick={() => handleGiftClick(gift)}>
                  <div className={getCardStyle()}>
                    <div className="h-16 w-24 overflow-hidden">
                      <img
                        src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/egogift/${gift.id}.webp`}
                        alt={gift.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://placehold.co/100x100/gray/white?text=No+Image';
                        }}
                      />
                    </div>
                    <div className="p-1 text-center">
                      <p className={`text-xs truncate ${textTransition} 
                        ${darkMode ? 'text-white' : 'text-black'}`}>
                        {gift.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Details panel */}
          {selectedGift && (
            <div className="md:w-1/2">
              <div className={getDetailCardStyle()}>
                <div className="flex flex-col h-full">
                  <h2 className={`text-lg font-semibold mb-2 ${textTransition} 
                    ${darkMode ? 'text-white' : 'text-black'}`}>
                    {selectedGift.name}
                  </h2>
                  
                  <div className="flex mb-4">
                    <div className="w-32 h-32 overflow-hidden mr-4">
                      <img
                        src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/egogift/${selectedGift.id}.webp`}
                        alt={selectedGift.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/100?text=No+Image';
                        }}
                      />
                    </div>
                    
                    <div>
                      <p className="mb-1"><span className="font-semibold">관련 이상:</span> {selectedGift.relatedAbnormality || '없음'}</p>
                      <p className="mb-1"><span className="font-semibold">등급:</span> {selectedGift.grade}</p>
                      <p className="mb-1"><span className="font-semibold">첫 등장:</span> {selectedGift.firstAppearance}</p>
                      <p className="mb-1"><span className="font-semibold">강화 가능:</span> {selectedGift.upgrade === 'yes' ? '예' : '아니오'}</p>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <p className="mb-2 font-semibold">효과:</p>
                    <p className="mb-4">{selectedGift.effectBase}</p>
                    
                    {selectedGift.effects && selectedGift.effects.map((effect, idx) => (
                      <div key={idx} className="mb-2 pl-4 border-l-2 border-gray-300">
                        <p className="font-semibold">{effect.level}</p>
                        <p>수식: {effect.formula}</p>
                        {effect.condition && <p>조건: {effect.condition}</p>}
                      </div>
                    ))}
                  </div>
                  
                  {selectedGift.nameTranslations && (
                    <div className="mt-4">
                      <p className="font-semibold mb-1">이름 번역:</p>
                      <p>영어: {selectedGift.nameTranslations.en}</p>
                      <p>일본어: {selectedGift.nameTranslations.ja}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EgogiftPage;