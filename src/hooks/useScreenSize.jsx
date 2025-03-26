// hooks/useScreenSize.jsx
import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // 초기 화면 크기 확인
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsSmallScreen(width < 640);
      setIsMediumScreen(width >= 640 && width < 1024);
    };

    // 컴포넌트 마운트시 실행
    if (typeof window !== 'undefined') {
      checkScreenSize();
      
      // 화면 크기 변경시 이벤트 핸들러
      window.addEventListener('resize', checkScreenSize);
      
      // 클린업 함수
      return () => window.removeEventListener('resize', checkScreenSize);
    }
  }, []);

  return { isSmallScreen, isMediumScreen, screenWidth };
};

export default useScreenSize;