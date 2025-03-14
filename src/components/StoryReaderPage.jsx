import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Routes, Route, useNavigate, useParams, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Homepage from '../pages/Homepage';
import MainPage from '../pages/MainPage';
import useStoryData from '../hooks/useStoryData';
import NavigationBar from './NavigationBar';
import StoryList from './StoryList';
import ChapterList from './ChapterList';
import StoryContent from './StoryContent';
import StoryDialog from './StoryDialog';
import LoadingSpinner from '../utill/LoadingSpinner';
import PersonalityPage from '../pages/PersonalityPage';
import PersonalityStoryList from '../pages/PersonalityStoryList';
import handleGoBack from '../utill/handleGoBack';
import ScrollContainer from '../utill/ScrollContainer';
import { navigateToNextStory, navigateToPreviousStory } from '../utill/navigateStoryButton';
import { Helmet } from 'react-helmet';
import loadChapterData from '../utill/loadChapterData';
import Footer from './footer';

// 만들어 둔 컴포넌트 import
import PersonalityStoryContent from './PersonalityStoryContent';
import PersonalityVoiceContent from './PersonalityVoiceContent';
import AnnouncerContent from './AnnouncerContent';
import AnnouncerPage from '../pages/AnnouncerPage';


import {
  restoreScrollPosition,
  handleStoryClick,
  handleChapterClick,
  handleNavigation,
  navigateToNextChapter,
  navigateToPreviousChapter
} from '../utill/function';


const StoryReaderPage = () => {
  const BASE_PATH = '/LimBooks';
  const navigate = useNavigate();
  const location = useLocation();
  const { storyType, storyId, chapterId, personalityId, contentType, announcerId } = useParams();
  const scrollRef = useRef(new Map());
  const [selectedStory, setSelectedStory] = useState(null);
  const [storyData, setStoryData] = useState(null);
  const [shouldRestoreScroll, setShouldRestoreScroll] = useState(false);
  const { stories, loading } = useStoryData(storyType);

  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    
    // 저장된 값이 있으면 그 값을 사용, 없으면 기본값 true 사용
    return savedDarkMode !== null ? JSON.parse(savedDarkMode) : true;
  });

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // 일반 스토리 로딩 로직
  useEffect(() => {
    if (storyType && storyId && stories?.[storyType]) {
      const story = stories[storyType].find(s => s.id === storyId);
      setSelectedStory(story);

      if (chapterId) {
        const fetchData = async () => {
          // storyId, chapterId와 함께 storyType도 전달
          const data = await loadChapterData(storyId, chapterId, storyType);
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

  // URL 패턴 감지 및 경로 설정 함수
  const isPersonalityStoryRoute = () => {
    // /personality/:personalityId/story/:storyId 형태의 URL 패턴 확인
    return location.pathname.match(/\/personality\/[^\/]+\/story\/[^\/]+/);
  };

  const isPersonalityVoiceRoute = () => {
    // /personality/:personalityId/voice/:storyId 형태의 URL 패턴 확인
    return location.pathname.match(/\/personality\/[^\/]+\/voice\/[^\/]+/);
  };

  const isAnnouncerRoute = () => {
    // /announcers/:announcerId 형태의 URL 패턴 확인
    return location.pathname.match(/\/announcers\/[^\/]+$/);
  };

  return (
    <ScrollContainer darkMode={darkMode}>
      
      <Helmet>
        <meta name="google-site-verification" content="Sx2a79nNCfoTBZTrBoUBsDlFjGlRQoA2u_AqN2QSreI" />
        <title>LimBooks - 림버스 스토리 아카이브</title>
        <meta name="description" content="LimBooks에서 림버스컴퍼니의 스토리를." />
        <meta name="keywords" content="LimBooks, 림버스, 스토리리더" />
        
        {/* Open Graph 태그 */}
        <meta property="og:title" content="LimBooks" />
        <meta property="og:description" content="LimBooks에서 다양한 이야기를 만나보세요" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://noita0130.github.io/LimBooks/" />
      </Helmet>

      <div className={`min-h-screen 
      ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-900'}`}>
        <NavigationBar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          handleNavigation={(path) => handleNavigation(path, location, scrollRef, setShouldRestoreScroll, navigate)}
          location={location}
        />
        <main className="max-w-6xl min-h-screen mx-auto px-4 py-8 font-NotoSerifKR">
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
                
                {/* 인격 페이지 */}
                {location.pathname === '/personality' && (
                  <PersonalityPage darkMode={darkMode} />
                )}
                
                {/* 인격 목록 페이지 */}
                {location.pathname.includes('/personality/') && location.pathname.split('/').length === 3 && (
                  <PersonalityStoryList
                    darkMode={darkMode}
                    personalityId={location.pathname.split('/')[2]}
                  />
                )}
                
                {/* 인격 스토리 콘텐츠 - PersonalityStoryContent 컴포넌트 사용 */}
                {isPersonalityStoryRoute() && (
                  <PersonalityStoryContent darkMode={darkMode} />
                )}
                
                {/* 인격 대사집 콘텐츠 - PersonalityVoiceContent 컴포넌트 사용 */}
                {isPersonalityVoiceRoute() && (
                  <PersonalityVoiceContent darkMode={darkMode} />
                )}

                {/* 아나운서 페이지 */}
                {location.pathname === '/announcers' && (
                  <AnnouncerPage darkMode={darkMode} />
                )}
                
                {/* 아나운서 대사 페이지 */}
                {isAnnouncerRoute() && (
                  <AnnouncerContent darkMode={darkMode} />
                )}
                
                {/* 기존 메인/미니 스토리 리스트 */}
                {(storyType === 'main' || storyType === 'mini') && !storyId && (
                  <StoryList
                    stories={stories}
                    storyType={storyType}
                    darkMode={darkMode}
                    handleStoryClick={(story) => handleStoryClick(story, storyType, navigate, location, scrollRef, setShouldRestoreScroll)}
                    loading={loading}
                  />
                )}
                
                {/* 챕터 리스트 */}
                {selectedStory && !chapterId && selectedStory.chapters.length >= 2 && (
                  <ChapterList
                    selectedStory={selectedStory}
                    darkMode={darkMode}
                    handleChapterClick={(chapterId) => handleChapterClick(chapterId, storyType, selectedStory, navigate, location, scrollRef, setShouldRestoreScroll)}
                    handleNavigation={(path) => handleNavigation(path, location, scrollRef, setShouldRestoreScroll, navigate)}
                    storyType={storyType}
                  />
                )}
                
                {/* 기존 스토리 컨텐츠 */}
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
        <Footer darkMode={darkMode} />
      </div>
    </ScrollContainer>
  );
};

export default StoryReaderPage;