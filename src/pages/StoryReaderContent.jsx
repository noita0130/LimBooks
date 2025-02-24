// pages/StoryReaderContent.jsx
import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Routes, Route, useNavigate, useParams, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Homepage from '../components/Homepage';
import useStoryData from '../hooks/useStoryData';
import NavigationBar from '../components/NavigationBar';
import StoryList from '../components/StoryList';
import ChapterList from '../components/ChapterList';
import StoryContent from '../components/StoryContent';
import LoadingSpinner from '../components/LoadingSpinner';
import ScriptList from '../components/ScriptsList';
import handleGoBack from '../utill/handleGoBack';
import ScrollContainer from '../utill/ScrollContainer'
import { navigateToNextStory, navigateToPreviousStory } from '../utill/navigateStoryButton';
import { Helmet } from 'react-helmet';

import {
  loadChapterData,
  saveScrollPosition,
  restoreScrollPosition,
  restoreScroll,
  handleStoryClick,
  handleChapterClick,
  handleNavigation,
  handlePopState,
  navigateToNextChapter,
  navigateToPreviousChapter
} from '../components/function';


const StoryReaderPage = () => {
  const BASE_PATH = '/LimBooks';
  const navigate = useNavigate();
  const location = useLocation();
  const { storyType, storyId, chapterId } = useParams();
  const scrollRef = useRef(new Map());

  const [darkMode, setDarkMode] = useState(true);
  const [selectedStory, setSelectedStory] = useState(null);
  const [storyData, setStoryData] = useState(null);
  const [shouldRestoreScroll, setShouldRestoreScroll] = useState(false);

  const { stories, loading } = useStoryData(storyType);

  const MainPage = React.lazy(() => Promise.resolve({
    default: ({ darkMode }) => (
      <div>
        <div className={`my-10 py-4 `}>
          <h1 className="text-center text-4xl font-bold mb-4">환영합니다</h1>
          <p className={`text-center }`}>
            LimBooks에서 다양한 이야기를 만나보세요.
          </p>
        </div>
        <div className={`my-10 py-4 `}>
          <h1 className="text-center text-2xl font-bold mb-4">제작중인 사항</h1>
          <p className="text-center ">
            1. 수감자 대사집 <br />
            2. 스토리 화자 수정

          </p>
        </div>
      </div>

    )
  }));

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
        const fetchData = async () => {
          const data = await loadChapterData(chapterId);
          setStoryData(data);
        };
        fetchData();

        if (!shouldRestoreScroll) {
          window.scrollTo(0, 0);
        }
      }
    } else {
      setSelectedStory(null);
      setStoryData(null);
    }
  }, [storyType, storyId, chapterId, stories, shouldRestoreScroll]);

  // URL 변경 감지 및 스크롤 처리
  useEffect(() => {
    const popStateHandler = () => handlePopState(location, scrollRef, setShouldRestoreScroll);
    window.addEventListener('popstate', popStateHandler);

    if (shouldRestoreScroll) {
      restoreScroll(scrollRef, location.pathname);
    }

    return () => {
      window.removeEventListener('popstate', popStateHandler);
    };
  }, [location.pathname, shouldRestoreScroll]);

  // 언마운트 시 스크롤 위치 저장
  useEffect(() => {
    return () => {
      saveScrollPosition(scrollRef, location.pathname);
    };
  }, [location.pathname]);

  return (
    <ScrollContainer darkMode={darkMode}>
      
      <Helmet>
        <meta name="google-site-verification" content="your-verification-code" />
        <title>LimBooks - 림버스 스토리 리더</title>
        <meta name="description" content="LimBooks에서 간단히 림버스를." />
        <meta name="keywords" content="LimBooks, 림버스, 스토리리더" />
        
        {/* Open Graph 태그 */}
        <meta property="og:title" content="LimBooks" />
        <meta property="og:description" content="LimBooks에서 다양한 이야기를 만나보세요" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://[username].github.io/LimBooks/" />
      </Helmet>

      <div className={`min-h-screen 
      ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-900'}`}>
        <NavigationBar
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          handleNavigation={(path) => handleNavigation(path, location, scrollRef, setShouldRestoreScroll, navigate)}
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
                    restoreScrollPosition(scrollRef, location.pathname);
                  }
                }}
              >
                {(location.pathname === '/' || location.pathname === '' || location.pathname === '/LimBooks' || location.pathname === '/LimBooks/') && <MainPage darkMode={darkMode} />}
                {location.pathname === '/scripts' && <ScriptList />}
                {(storyType === 'main' || storyType === 'mini') && !storyId && (
                  <StoryList
                    stories={stories}
                    storyType={storyType}
                    darkMode={darkMode}
                    handleStoryClick={(story) => handleStoryClick(story, storyType, navigate, location, scrollRef, setShouldRestoreScroll)}
                    loading={loading}
                  />
                )}
                {/* main 스토리일 때만 ChapterList를 보여줌*/}
                {selectedStory && !chapterId && selectedStory.chapters.length >= 2 && (
                  <ChapterList
                    selectedStory={selectedStory}
                    darkMode={darkMode}
                    handleChapterClick={(chapterId) => handleChapterClick(chapterId, storyType, selectedStory, navigate, location, scrollRef, setShouldRestoreScroll)}
                    handleNavigation={(path) => handleNavigation(path, location, scrollRef, setShouldRestoreScroll, navigate)}
                    storyType={storyType}
                  />
                )}
                {chapterId && storyData && (
                  <StoryContent
                    storyData={storyData}
                    darkMode={darkMode}
                    handleGoBack={() => handleGoBack(navigate, location, scrollRef, setShouldRestoreScroll, storyType, stories, setStoryData, setSelectedStory)}
                    handleNavigation={(path) => handleNavigation(path, location, scrollRef, setShouldRestoreScroll, navigate)}
                    handleNextStory={() => navigateToNextStory(stories, selectedStory.id, storyType, navigate, location, scrollRef, setShouldRestoreScroll)}
                    handlePreviousStory={() => navigateToPreviousStory(stories, selectedStory.id, storyType, navigate, location, scrollRef, setShouldRestoreScroll)}
                    handleNextChapter={() => navigateToNextChapter(selectedStory, chapterId, storyType, navigate, location, scrollRef, setShouldRestoreScroll)}
                    handlePreviousChapter={() => navigateToPreviousChapter(selectedStory, chapterId, storyType, navigate, location, scrollRef, setShouldRestoreScroll)}
                    storyType={storyType}
                    selectedStory={selectedStory}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </Suspense>
        </main>
      </div>
    </ScrollContainer>
  );
};

const StoryReaderContent = () => {
  return (
    <Routes>

      {/* 홈페이지 루트 경로 */}
      <Route path="/" element={<StoryReaderPage />} />
      <Route path="/:storyType" element={<StoryReaderPage />} />
      <Route path="/:storyType/:storyId" element={<StoryReaderPage />} />
      <Route path="/:storyType/:storyId/:chapterId" element={<StoryReaderPage />} />
      <Route path="/scripts" element={<StoryReaderPage />} />
    </Routes>
  );
};

export default StoryReaderContent;