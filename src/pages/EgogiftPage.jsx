// components/EgogiftPage.jsx
import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import useDarkMode from '../hooks/useDarkmode';
import { backgroundTransition, textTransition, buttonTransition } from '../components/TransitionStyles';
import egogiftData from '../data/egogiftData';
import LoadingSpinner from '../utill/LoadingSpinner';

// 개별 카드 컴포넌트 메모이제이션
const GiftCard = memo(({ gift, onClick, darkMode }) => {
  const cardStyle = `${backgroundTransition} cursor-pointer 
    ${darkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-white hover:bg-neutral-100'} 
    rounded-lg shadow-md overflow-hidden w-24 h-28 flex flex-col`;

  return (
    <div onClick={() => onClick(gift)} className="w-full flex justify-center">
      <div className={cardStyle}>
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
  );
});

// 카테고리 버튼 컴포넌트 메모이제이션
const CategoryButton = memo(({ category, label, isActive, onClick, darkMode }) => {
  const buttonStyle = `px-3 py-2 rounded-md text-sm md:text-base ${buttonTransition} 
    ${darkMode
      ? isActive
        ? 'bg-neutral-600 text-white'
        : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
      : isActive
        ? 'bg-neutral-300 text-black'
        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
    }`;

  return (
    <button
      onClick={() => onClick(category)}
      className={buttonStyle}
    >
      {label}
    </button>
  );
});

// 상세 정보 패널 컴포넌트 메모이제이션
const DetailPanel = memo(({ gift, darkMode, onClose }) => {
  const detailCardStyle = `${backgroundTransition}
    ${darkMode ? 'bg-neutral-800' : 'bg-white'}
    rounded-lg shadow-md overflow-hidden h-full p-4`;

  return (
    <div className="h-min md:w-1/2 transition-all duration-300">
      <div className={detailCardStyle}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-lg font-semibold ${textTransition} 
            ${darkMode ? 'text-white' : 'text-black'}`}>
            {gift.name}
          </h2>

          <button
            onClick={onClose}
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
                src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/egogift/${gift.id}.webp`}
                alt={gift.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/100x100/gray/white?text=No+Image';
                }}
              />
            </div>

            <div>
              <p className="mb-1"><span className="font-semibold">관련 이상:</span> {gift.relatedAbnormality || '없음'}</p>
              <p className="mb-1"><span className="font-semibold">등급:</span> {gift.grade}</p>
              <p className="mb-1"><span className="font-semibold">첫 등장:</span> {gift.firstAppearance}</p>
              <p className="mb-1"><span className="font-semibold">강화 가능:</span> {gift.upgrade === 'yes' ? '예' : '아니오'}</p>
            </div>
          </div>

          <div className="mt-2">
            <p className="mb-2 font-semibold">효과:</p>
            <p className="mb-4">{gift.effectBase}</p>

            {gift.effects && gift.effects.map((effect, idx) => (
              <div key={idx} className="mb-2 pl-4 border-l-2 border-gray-300">
                <p className="font-semibold">{effect.level}</p>
                <p>수식: {effect.formula}</p>
                {effect.condition && <p>조건: {effect.condition}</p>}
              </div>
            ))}
          </div>

          {gift.nameTranslations && (
            <div className="mt-4">
              <p className="font-semibold mb-1">이름 번역:</p>
              <p>영어: {gift.nameTranslations.en}</p>
              <p>일본어: {gift.nameTranslations.ja}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

const EgogiftPage = () => {
  const { darkMode } = useDarkMode();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGift, setSelectedGift] = useState(null);
  const [filteredGifts, setFilteredGifts] = useState([]);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // 카테고리 버튼 레이블 매핑 - 메모이제이션
  const categoryLabels = useMemo(() => ({
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
  }), []);

  // egogiftData의 키(카테고리) - 메모이제이션
  const categories = useMemo(() => Object.keys(egogiftData), []);

  // 초기 데이터 로딩 완료 후 로딩 상태 변경
  useEffect(() => {
    // 데이터 로딩 시뮬레이션 (실제 데이터는 이미 임포트됨)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 800ms 후 로딩 완료
    
    return () => clearTimeout(timer);
  }, []);

  // 선택된 카테고리와 검색어에 따라 필터링된 아이템 업데이트
  useEffect(() => {
    setIsLoading(true); // 필터링 시작 시 로딩 상태로 변경
    
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

    // 약간의 지연을 두고 필터링 결과를 적용 (UI 렌더링 최적화)
    const timer = setTimeout(() => {
      setFilteredGifts(gifts);
      setIsLoading(false); // 필터링 완료 후 로딩 상태 해제
    }, 300);
    
    return () => clearTimeout(timer);
  }, [selectedCategories, searchQuery]);

  // 이벤트 핸들러 메모이제이션
  const handleGiftClick = useCallback((gift) => {
    setSelectedGift(gift);
    setIsDetailOpen(true);
  }, []);

  const toggleCategory = useCallback((category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        // 이미 선택된 카테고리면 제거
        return prev.filter(cat => cat !== category);
      } else {
        // 선택되지 않은 카테고리면 추가
        return [...prev, category];
      }
    });
  }, []);

  const closeDetail = useCallback(() => {
    setIsDetailOpen(false);
    setSelectedGift(null);
  }, []);

  // 스타일 함수 메모이제이션
  const getSearchInputStyle = useCallback(() => `w-full px-3 py-2 rounded-md text-sm ${backgroundTransition} 
    ${darkMode ? 'bg-neutral-800 text-white border-neutral-700' : 'bg-white text-black border-neutral-200'} 
    border focus:outline-none focus:ring-2 focus:ring-blue-500`, [darkMode]);

  // 그리드 레이아웃 스타일 메모이제이션
  const gridStyle = useMemo(() => ({
    display: 'grid',
    gap: '0.5rem',
    gridTemplateColumns: isDetailOpen
      ? 'repeat(auto-fill, minmax(100px, 1fr))'
      : 'repeat(auto-fill, minmax(100px, 1fr))',
    justifyItems: 'center',
  }), [isDetailOpen]);

  // 메인 컨테이너 스타일 메모이제이션
  const containerStyle = useMemo(() => `min-h-screen rounded-lg p-4 md:p-6 ${backgroundTransition} 
    ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'}`, [darkMode]);

  // 제목 스타일 메모이제이션
  const titleStyle = useMemo(() => `text-xl font-bold mb-6 ${textTransition} 
    ${darkMode ? 'text-white' : 'text-black'}`, [darkMode]);

  return (
    <div className={containerStyle}>
      <div className="max-w-6xl mx-auto">
        <h1 className={titleStyle}>
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
            <CategoryButton
              key={category}
              category={category}
              label={categoryLabels[category] || category}
              isActive={selectedCategories.includes(category)}
              onClick={toggleCategory}
              darkMode={darkMode}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* 로딩 중이면 LoadingSpinner 표시, 아니면 컨텐츠 표시 */}
          {isLoading ? (
            <div className="w-full">
              <LoadingSpinner />
            </div>
          ) : (
            <>
              {/* Grid of EGO gifts - 상세 정보가 열려있으면 화면 왼쪽에 표시, 아니면 전체 너비 사용 */}
              <div className={`${isDetailOpen ? 'md:w-1/2' : 'w-full'} transition-all duration-300`}>
                <div style={gridStyle}>
                  {filteredGifts.length > 0 ? (
                    filteredGifts.map((gift, index) => (
                      <GiftCard
                        key={`${gift.id || gift.name}-${index}`}
                        gift={gift}
                        onClick={handleGiftClick}
                        darkMode={darkMode}
                      />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-8">
                      검색 결과가 없습니다.
                    </div>
                  )}
                </div>
              </div>

              {/* Details panel - 상세 정보가 열려있을 때만 표시 */}
              {isDetailOpen && selectedGift && (
                <DetailPanel
                  gift={selectedGift}
                  darkMode={darkMode}
                  onClose={closeDetail}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EgogiftPage;