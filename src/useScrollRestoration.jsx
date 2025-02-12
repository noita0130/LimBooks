import { useEffect, useRef } from 'react';

const useScrollRestoration = () => {
  const scrollPositions = useRef({});

  // 페이지 이동 시 스크롤 위치 저장
  const saveScrollPosition = (key) => {
    scrollPositions.current[key] = window.scrollY;
    sessionStorage.setItem(key, window.scrollY);
  };

  // 뒤로가기 시 스크롤 위치 복원
  const restoreScrollPosition = (key) => {
    const savedPosition = sessionStorage.getItem(key);
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    } else {
      window.scrollTo(0, 0); // 저장된 위치가 없으면 맨 위로 이동
    }
  };

  // 페이지 이동 시 스크롤 맨 위로 이동
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return { saveScrollPosition, restoreScrollPosition, scrollToTop };
};

export default useScrollRestoration;