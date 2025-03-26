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
const useGridColumns = (isDetailOpen) => {
  const [columns, setColumns] = useState(6); // 기본값
  const { isSmallScreen, screenWidth } = useScreenSize();

  useEffect(() => {
    const handleResize = () => {
      const width = screenWidth;
      if (width < 640) setColumns(3);
      else if (width < 768) setColumns(isDetailOpen ? 3 : 4);
      else if (width < 1024) setColumns(isDetailOpen ? 4 : 6);
      else setColumns(isDetailOpen ? 5 : 8);
    };

    // 초기 설정
    handleResize();
  }, [isDetailOpen, screenWidth, isSmallScreen]);

  return columns;
};

const EgogiftPage = () => {
  const { darkMode } = useDarkMode();
  const { isSmallScreen } = useScreenSize();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGift, setSelectedGift] = useState(null);
  const [filteredGifts, setFilteredGifts] = useState([]);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // 고정된 열 수 계산 (화면 크기와 상세 패널 상태에 따라)
  const gridColumns = useGridColumns(isDetailOpen);

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
    // 자연스러운 애니메이션을 위해 상태 변경의 타이밍 조절
    setIsDetailOpen(false);
    // 약간의 지연 후에 선택된 선물 상태 초기화
    setTimeout(() => {
      setSelectedGift(null);
    }, 500); // transition-duration과 일치
  }, []);

  // 그리드 레이아웃 스타일 메모이제이션 - 고정 열 개수 사용
  const gridStyle = useMemo(() => {
    return {
      display: 'grid',
      gap: '0.5rem',
      gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`,
      justifyItems: 'center',
      transition: 'all 0.5s ease-in-out', // 그리드 자체에 트랜지션 적용
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
          EGO Gift List
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
              <div className="flex flex-col md:flex-row gap-6">
                {/* Desktop: Grid of EGO gifts - 상세 정보가 열려있으면 화면 왼쪽에 표시, 아니면 전체 너비 사용 */}
                <div className={`${isDetailOpen ? 'md:w-1/2' : 'w-full'} transition-all duration-500 ease-in-out`}>
                  <DesktopGiftGrid 
                    gifts={filteredGifts}
                    gridStyle={gridStyle}
                    handleGiftClick={handleGiftClick}
                    darkMode={darkMode}
                  />
                </div>

                {/* Desktop: Details panel - 상세 정보가 열려있을 때만 표시 */}
                {isDetailOpen && selectedGift && (
                  <DetailPanel
                    gift={selectedGift}
                    darkMode={darkMode}
                    onClose={closeDetail}
                    isSmallScreen={false}
                  />
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EgogiftPage;