// pages/StoryReaderContent.jsx
import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import useStoryData from '../hooks/useStoryData';
import NavigationBar from '../components/NavigationBar';
import StoryList from '../components/StoryList';
import ChapterList from '../components/ChapterList';
import StoryContent from '../components/StoryContent';
import LoadingSpinner from '../components/LoadingSpinner';

const HomePage = React.lazy(() => Promise.resolve({
  default: () => (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">환영합니다</h1>
      <p className="text-neutral-600 dark:text-neutral-400">스토리리더에서 다양한 이야기를 만나보세요.</p>
    </div>
  )
}));

const StoryReaderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { storyType, storyId, chapterId } = useParams();
  const scrollRef = useRef(new Map());

  const [darkMode, setDarkMode] = useState(true);
  const [selectedStory, setSelectedStory] = useState(null);
  const [storyData, setStoryData] = useState(null);
  const [shouldRestoreScroll, setShouldRestoreScroll] = useState(false);
  
  const { stories, loading } = useStoryData(storyType);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (storyType && storyId && stories?.[storyType]) {
      const story = stories[storyType].find(s => s.id === storyId);
      setSelectedStory(story);

      if (chapterId) {
        loadChapterData(chapterId);
        if (!shouldRestoreScroll) {
          window.scrollTo(0, 0);
        }
      }
    } else {
      setSelectedStory(null);
      setStoryData(null);
    }
  }, [storyType, storyId, chapterId, stories, shouldRestoreScroll]);

  const loadChapterData = async (chapterId) => {
    try {
      const response = await import(`../story/${chapterId}.json`);
      const data = response.default;
      setStoryData(data);
    } catch (error) {
      console.error('챕터 데이터를 불러오는데 실패했습니다:', error);
    }
  };

  
  // 현재 스크롤 위치 저장
  const saveScrollPosition = (path) => {
    scrollRef.current.set(path, window.scrollY);
  };

  // 저장된 스크롤 위치로 복원
  const restoreScrollPosition = (path) => {
    const savedPosition = scrollRef.current.get(path);
    if (savedPosition !== undefined) {
      requestAnimationFrame(() => {
        window.scrollTo(0, savedPosition);
      });
    }
  };

  const handleStoryClick = (story) => {
    const currentScroll = window.scrollY;
    setShouldRestoreScroll(false);
    navigate(`/${storyType}/${story.id}`);
    scrollRef.current.set(location.pathname, currentScroll);
  };

  const handleChapterClick = (chapterId) => {
    const currentScroll = window.scrollY;
    setShouldRestoreScroll(false);
    navigate(`/${storyType}/${selectedStory.id}/${chapterId}`);
    scrollRef.current.set(location.pathname, currentScroll);
  };

  // 스크롤 복원 함수
  const restoreScroll = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const savedPosition = scrollRef.current.get(location.pathname);
        if (savedPosition !== undefined) {
          window.scrollTo(0, savedPosition);
        }
      });
    });
  };

  // 뒤로가기 처리
  const handleGoBack = () => {
    const currentScroll = window.scrollY;
    setShouldRestoreScroll(true);
    navigate(-1);
    scrollRef.current.set(location.pathname, currentScroll);
  };

  // URL 변경 감지 및 스크롤 처리
  useEffect(() => {
    const handlePopState = () => {
      const currentScroll = window.scrollY;
      setShouldRestoreScroll(true);
      scrollRef.current.set(location.pathname, currentScroll);
    };

    window.addEventListener('popstate', handlePopState);

    // 페이지 렌더링 후 스크롤 복원
    if (shouldRestoreScroll) {
      restoreScroll();
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location.pathname, shouldRestoreScroll]);

  // 언마운트 시 스크롤 위치 저장
  useEffect(() => {
    return () => {
      saveScrollPosition(location.pathname);
    };
  }, [location.pathname]);

  // 네비게이션 처리
  const handleNavigation = (path) => {
    saveScrollPosition(location.pathname);
    setShouldRestoreScroll(false);
    navigate(path);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 
      ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-900'}`}>
      <NavigationBar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        handleNavigation={handleNavigation}
        location={location}
      />
      <main className="max-w-6xl mx-auto px-4 py-8 font-NotoSerifKR">
        <Suspense fallback={<LoadingSpinner />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onAnimationComplete={() => {
                if (shouldRestoreScroll) {
                  restoreScrollPosition(location.pathname);
                }
              }}
            >
              {location.pathname === '/' && <HomePage />}
              {(storyType === 'main' || storyType === 'side') && !storyId && (
                <StoryList
                  stories={stories}
                  storyType={storyType}
                  darkMode={darkMode}
                  handleStoryClick={handleStoryClick}
                  loading={loading}
                />
              )}
              {selectedStory && !chapterId && (
                <ChapterList
                  selectedStory={selectedStory}
                  darkMode={darkMode}
                  handleChapterClick={handleChapterClick}
                  handleNavigation={handleNavigation}
                  storyType={storyType}
                />
              )}
              {chapterId && storyData && (
                <StoryContent
                  storyData={storyData}
                  darkMode={darkMode}
                  handleGoBack={handleGoBack}
                  handleNavigation={handleNavigation}
                  storyType={storyType}
                  selectedStory={selectedStory}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>
    </div>
  );
};

const StoryReaderContent = () => {
  return (
    <Routes>
      <Route path="/" element={<StoryReaderPage />} />
      <Route path="/:storyType" element={<StoryReaderPage />} />
      <Route path="/:storyType/:storyId" element={<StoryReaderPage />} />
      <Route path="/:storyType/:storyId/:chapterId" element={<StoryReaderPage />} />
    </Routes>
  );
};

export default StoryReaderContent;