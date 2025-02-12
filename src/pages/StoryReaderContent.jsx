// pages/StoryReaderContent.jsx
import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import useScrollRestoration from '../hooks/useScrollRestoration';
import useStoryData from '../hooks/useStoryData';

import NavigationBar from '../components/NavigationBar';
import StoryList from '../components/StoryList';
import ChapterList from '../components/ChapterList';
import StoryContent from '../components/StoryContent';
import LoadingSpinner from '../components/LoadingSpinner';

// HomePage 컴포넌트 정의
const HomePage = React.lazy(() => Promise.resolve({
  default: () => (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">환영합니다</h1>
      <p className="text-neutral-600 dark:text-neutral-400">스토리리더에서 다양한 이야기를 만나보세요.</p>
    </div>
  )
}));



// 실제 컨텐츠를 렌더링하는 컴포넌트
const StoryReaderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { storyType, storyId, chapterId } = useParams();
  
  const { saveScrollPosition, restoreScrollposition, scrollToTop } = useScrollRestoration();
  const { stories, loading } = useStoryData(storyType);
  
  const [darkMode, setDarkMode] = useState(true);
  const [selectedStory, setSelectedStory] = useState(null);
  const [storyData, setStoryData] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (storyType && storyId) {
      const story = stories[storyType]?.find(s => s.id === storyId);
      setSelectedStory(story);

      if (chapterId) {
        loadChapterData(chapterId);
      }
    } else {
      setSelectedStory(null);
      setStoryData(null);
    }
  }, [storyType, storyId, chapterId, stories]);

  const loadChapterData = async (chapterId) => {
    try {
      const response = await import(`../story/${chapterId}.json`);
      const data = response.default;
      setStoryData(data);
    } catch (error) {
      console.error('챕터 데이터를 불러오는데 실패했습니다:', error);
    }
  };

  // Navigation handlers
  const handleNavigation = (path) => {
    console.log('Navigating to:', path);
    saveScrollPosition(location.pathname);
    navigate(path);
  };

  const handleStoryClick = (story) => {
    handleNavigation(`/${storyType}/${story.id}`);
  };

  const handleChapterClick = (chapterId) => {
    handleNavigation(`/${storyType}/${selectedStory.id}/${chapterId}`);
  };

  const handleGoBack = () => {
    saveScrollPosition(location.pathname);
    navigate(-1);
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
      <main className="max-w-6xl mx-auto px-4 py-8 font-dialogs">
        <Suspense fallback={<LoadingSpinner />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
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

// 메인 컴포넌트 - 라우트 설정
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