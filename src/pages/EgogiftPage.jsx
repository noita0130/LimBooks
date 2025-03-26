// components/EgogiftPage.jsx
import { useState, useEffect } from 'react';
import useDarkMode from '../hooks/useDarkmode';
import { backgroundTransition, textTransition, buttonTransition } from '../components/TransitionStyles';
import egogiftData from '../data/egogiftData';

const EgogiftPage = () => {
  const { darkMode } = useDarkMode();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGift, setSelectedGift] = useState(null);
  const [filteredGifts, setFilteredGifts] = useState([]);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // 카테고리 버튼 레이블 매핑
  const categoryLabels = {
    'Burn': '화상',
    'Bleed': '출혈',
    'Vibration': '진동',
    'Rupture': '파열',
    'Sinking': '침잠',
    'Breathe': '호흡',
    'Charge': '충전',
    'Slash': '참격',
    'Pierce': '관통',
    'Strike': '타격',
    'General': '범용'
  };

  // egogiftData의 키(카테고리)
  const categories = Object.keys(egogiftData);

  // 선택된 카테고리와 검색어에 따라 필터링된 아이템 업데이트
  useEffect(() => {
    let gifts = [];

    if (selectedCategories.length === 0) {
      // 아무것도 선택되지 않았을 때 모든 카테고리의 아이템을 합친다
      gifts = Object.values(egogiftData).flat();
    } else {
      // 선택된 카테고리의 아이템들만 합친다
      gifts = selectedCategories.reduce((acc, category) => {
        return [...acc, ...egogiftData[category]];
      }, []);
    }

    // 검색어로 필터링
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      gifts = gifts.filter(gift => {
        // 한글 이름 검색
        const nameMatch = gift.name ? gift.name.includes(searchQuery) : false;

        // 영어 이름 검색 (있는 경우에만)
        const enNameMatch = gift.nameTranslations && gift.nameTranslations.en ?
          gift.nameTranslations.en.toLowerCase().includes(query) : false;

        return nameMatch || enNameMatch;
      });
    }

    setFilteredGifts(gifts);
  }, [selectedCategories, searchQuery]);

  const handleGiftClick = (gift) => {
    setSelectedGift(gift);
    setIsDetailOpen(true);
  };

  const toggleCategory = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        // 이미 선택된 카테고리면 제거
        return prev.filter(cat => cat !== category);
      } else {
        // 선택되지 않은 카테고리면 추가
        return [...prev, category];
      }
    });
  };

  const closeDetail = () => {
    setIsDetailOpen(false);
    setSelectedGift(null);
  };

  const toggleDetail = () => {
    setIsDetailOpen(!isDetailOpen);
  };

  const getCardStyle = () => `${backgroundTransition} cursor-pointer 
  ${darkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-white hover:bg-neutral-100'} 
  rounded-lg shadow-md overflow-hidden w-24 h-28 flex flex-col`;

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

  const getSearchInputStyle = () => `w-full px-3 py-2 rounded-md text-sm ${backgroundTransition} 
    ${darkMode ? 'bg-neutral-800 text-white border-neutral-700' : 'bg-white text-black border-neutral-200'} 
    border focus:outline-none focus:ring-2 focus:ring-blue-500`;

  return (
    <div className={`min-h-screen rounded-lg p-4 md:p-6 ${backgroundTransition} 
      ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'}`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-xl font-bold mb-6 ${textTransition} 
          ${darkMode ? 'text-white' : 'text-black'}`}>
          EGO Gift List
        </h1>

        {/* 검색 입력 필드 */}
        <div className="mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="이름으로 검색..."
            className={getSearchInputStyle()}
          />
        </div>

        {/* Category selector (멀티 선택 가능한 체크박스처럼 작동) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={getCategoryButtonStyle(selectedCategories.includes(category))}
            >
              {categoryLabels[category] || category}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Grid of EGO gifts - 상세 정보가 열려있으면 화면 왼쪽에 표시, 아니면 전체 너비 사용 */}
          <div className={`${isDetailOpen ? 'md:w-1/2' : 'w-full'} transition-all duration-300`}>
            <div className="grid gap-2" style={{
              gridTemplateColumns: isDetailOpen
                ? 'repeat(auto-fill, minmax(100px, 1fr))'
                : 'repeat(auto-fill, minmax(100px, 1fr))',
              justifyItems: 'center',
            }}>
              {filteredGifts.map((gift, index) => (
                <div key={index} onClick={() => handleGiftClick(gift)} className="w-full flex justify-center">
                  <div className={getCardStyle()}>
                    <div className="h-24 w-24 overflow-hidden">
                      <img
                        src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/egogift/${gift.id}.webp`}
                        alt={gift.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://placehold.co/100x100/gray/white?text=No+Image';
                        }}
                      />
                    </div>
                    <div className="p-1 flex-1 flex items-center justify-center">
                      <p className={`text-xs break-words text-center ${textTransition} 
                                  ${darkMode ? 'text-white' : 'text-black'}`}>
                        {gift.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Details panel - 상세 정보가 열려있을 때만 표시 */}
          {isDetailOpen && selectedGift && (
            <div className="h-min md:w-1/2 transition-all duration-300">
              <div className={getDetailCardStyle()}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className={`text-lg font-semibold ${textTransition} 
                    ${darkMode ? 'text-white' : 'text-black'}`}>
                    {selectedGift.name}
                  </h2>

                  {/* 닫기 버튼 */}
                  <button
                    onClick={closeDetail}
                    className={`p-2 rounded-full ${buttonTransition} 
                      ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col h-full">
                  <div className="flex mb-4">
                    <div className="w-32 h-32 overflow-hidden mr-4">
                      <img
                        src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/egogift/${selectedGift.id}.webp`}
                        alt={selectedGift.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://placehold.co/100x100/gray/white?text=No+Image';
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