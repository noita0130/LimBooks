// hooks/useScrollRestoration.js
import { useCallback, useEffect, useRef } from 'react';

const useScrollRestoration = () => {
  const scrollPositions = useRef(new Map());
  const isBack = useRef(false);
  const currentPath = useRef('');

  // 스크롤 위치 저장
  const saveScrollPosition = useCallback((path) => {
    if (!path || path === currentPath.current) return;
    
    const position = window.scrollY;
    if (position > 0) {
      scrollPositions.current.set(path, position);
    }
    currentPath.current = path;
  }, []);

  // 스크롤 위치 복원
  const restoreScrollposition = useCallback((path) => {
    if (!path) return;

    setTimeout(() => {
      requestAnimationFrame(() => {
        const savedPosition = scrollPositions.current.get(path);
        if (savedPosition !== undefined && savedPosition > 0) {
          window.scrollTo(0, savedPosition);
          scrollPositions.current.delete(path);
        }
      });
    }, 50);
  }, []);

  // 맨 위로 스크롤
  const scrollToTop = useCallback(() => {
    if (!isBack.current) {
      window.scrollTo(0, 0);
    }
    isBack.current = false;
  }, []);

  // 페이지 이동 감지 및 처리
  const handlePathChange = useCallback((path) => {
    if (isBack.current) {
      restoreScrollposition(path);
    } else {
      scrollToTop();
    }
  }, [restoreScrollposition, scrollToTop]);

  // 브라우저 뒤로가기/앞으로가기 감지
  useEffect(() => {
    const handlePopState = () => {
      isBack.current = true;
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return {
    saveScrollPosition,
    handlePathChange,
    scrollToTop
  };
};

export default useScrollRestoration;