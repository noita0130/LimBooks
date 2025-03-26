// hooks/useScreenSize.jsx
import { useState, useEffect } from 'react';

const useScreenSize = () => {
  // 초기 상태는 서버 사이드 렌더링을 고려하여 기본값 설정
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    // 화면 크기 확인 함수
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      
      // SM 기준점 640px
      const smallScreen = width < 640;
      // MD 기준점 640px ~ 1024px
      const mediumScreen = width >= 640 && width < 1024;
      
      setIsSmallScreen(smallScreen);
      setIsMediumScreen(mediumScreen);
      
      // 디버깅을 위해 콘솔에 크기 변경 기록
      console.log(`Screen size changed: ${width}px, isSmallScreen: ${smallScreen}`);
    };

    // 컴포넌트 마운트시 즉시 실행
    checkScreenSize();
    
    // 디바운스 처리를 위한 타이머
    let resizeTimer;
    
    // 화면 크기 변경 이벤트 핸들러
    const handleResize = () => {
      // 디바운스 처리로 성능 최적화
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkScreenSize, 100);
    };
    
    // 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);
    
    // 클린업 함수
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return { isSmallScreen, isMediumScreen, screenWidth };
};

export default useScreenSize;