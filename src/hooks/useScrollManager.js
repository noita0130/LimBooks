// hooks/useScrollManager.js
import { useCallback, useRef, useState } from 'react';

const useScrollManager = () => {
  const scrollPositions = useRef(new Map());
  const isAnimating = useRef(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 스크롤 위치 저장
  const saveScrollPosition = useCallback((path) => {
    if (!path) return;
    scrollPositions.current.set(path, window.scrollY);
  }, []);

  // 부드러운 스크롤 애니메이션
  const smoothScrollToTop = useCallback(() => {
    return new Promise((resolve) => {
      if (isAnimating.current) {
        resolve();
        return;
      }

      isAnimating.current = true;
      const start = window.scrollY;
      const startTime = performance.now();
      const duration = 300; // 애니메이션 시간 (ms)

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // easeInOutCubic 이징 함수 사용
        const easing = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        const currentPosition = start * (1 - easing);
        window.scrollTo(0, currentPosition);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          isAnimating.current = false;
          resolve();
        }
      };

      requestAnimationFrame(animateScroll);
    });
  }, []);

  // 페이지 전환 처리
  const handlePathChange = useCallback(async (path, shouldAnimate = true, isBackNavigation = false) => {
    setIsTransitioning(true);

    if (isBackNavigation) {
      // 뒤로가기 시에는 페이드 아웃 후 스크롤 위치 복원
      await new Promise(resolve => setTimeout(resolve, 300)); // 페이드 아웃 대기
      const savedPosition = scrollPositions.current.get(path);
      if (savedPosition !== undefined) {
        window.scrollTo(0, savedPosition);
        scrollPositions.current.delete(path);
      }
    } else if (shouldAnimate) {
      // 일반 네비게이션의 경우 페이드 아웃 > 스크롤 > 페이드 인
      await new Promise(resolve => setTimeout(resolve, 300)); // 페이드 아웃 대기
      await smoothScrollToTop();
    }

    setIsTransitioning(false);
  }, [smoothScrollToTop]);

  return {
    saveScrollPosition,
    handlePathChange,
    isTransitioning
  };
};

export default useScrollManager;