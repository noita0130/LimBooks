// components/EgogiftPage.jsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import useDarkMode from '../hooks/useDarkmode';
import useScreenSize from '../hooks/useScreenSize';
import { backgroundTransition, textTransition } from '../components/TransitionStyles';
import egogiftData from '../data/egogiftData';
import LoadingSpinner from '../utill/LoadingSpinner';
import SearchBar from '../components/Egogift/SearchBar';
import CategorySelector from '../components/Egogift/CategorySelector';
import DetailPanel from '../components/Egogift/DetailPanel';
import DesktopGiftGrid from '../components/Egogift/DesktopGiftGrid';
import MobileGiftList from '../components/Egogift/MobileGiftList';

// 고정된 열 수를 계산하는 훅
const useGridColumns = () => {
  const [columns, setColumns] = useState(6); // 기본값
  const { isSmallScreen, screenWidth } = useScreenSize();

  useEffect(() => {
    const handleResize = () => {
      const width = screenWidth;
      if (width < 640) setColumns(3);
      else if (width < 768) setColumns(3);
      else if (width < 1024) setColumns(4);
      else setColumns(5);
    };

    // 초기 설정
    handleResize();
  }, [screenWidth, isSmallScreen]);

  return columns;
};

const EgogiftPage = () => {
  const { darkMode } = useDarkMode();
  const { isSmallScreen } = useScreenSize();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGift, setSelectedGift] = useState(null);
  const [filteredGifts, setFilteredGifts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // 전역 window 객체에 egogiftData 저장 (컴포넌트에서 사용할 수 있도록)
  useEffect(() => {
    window.egogiftData = egogiftData;
  }, []);

  // 고정된 열 수 계산
  const gridColumns = useGridColumns();

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
      // 첫 번째 아이템을 기본 선택
      if (gifts.length > 0 && !selectedGift) {
        setSelectedGift(gifts[0]);
      } else if (gifts.length === 0) {
        setSelectedGift(null);
      }
      setIsLoading(false); // 필터링 완료 후 로딩 상태 해제
    }, 300);
    
    return () => clearTimeout(timer);
  }, [selectedCategories, searchQuery]);

  // 이벤트 핸들러 메모이제이션
  const handleGiftClick = useCallback((gift) => {
    setSelectedGift(gift);
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

  // 그리드 레이아웃 스타일 메모이제이션 - 고정 열 개수 사용
  const gridStyle = useMemo(() => {
    return {
      display: 'grid',
      gap: '0.5rem',
      gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`,
      justifyItems: 'center',
    };
  }, [gridColumns]);

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
          E.G.O 기프트 목록
        </h1>

        {/* 검색 입력 필드 */}
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          darkMode={darkMode}
        />

        {/* 카테고리 선택기 */}
        <CategorySelector 
          categories={categories}
          categoryLabels={categoryLabels}
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
          darkMode={darkMode}
        />

        {/* 로딩 중이면 LoadingSpinner 표시, 아니면 컨텐츠 표시 */}
        {isLoading ? (
          <div className="w-full">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            {/* 모바일 화면에서는 리스트 형태로 표시 */}
            {isSmallScreen ? (
              <MobileGiftList 
                gifts={filteredGifts} 
                darkMode={darkMode} 
              />
            ) : (
              <div className="flex flex-row gap-6">
                {/* Desktop: Grid of EGO gifts - 3/5 너비로 설정 */}
                <div className="w-3/5">
                  <DesktopGiftGrid 
                    gifts={filteredGifts}
                    gridStyle={gridStyle}
                    handleGiftClick={handleGiftClick}
                    darkMode={darkMode}
                  />
                </div>

                {/* Desktop: Details panel - 항상 표시, 2/5 너비로 설정 */}
                <div className="w-2/5">
                  {selectedGift ? (
                    <DetailPanel
                      gift={selectedGift}
                      darkMode={darkMode}
                      isSmallScreen={false}
                    />
                  ) : (
                    <div className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} 
                      rounded-lg shadow-md h-full p-4 flex items-center justify-center`}>
                      <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        선택된 EGO 선물이 없습니다
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EgogiftPage;