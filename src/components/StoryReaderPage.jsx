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
import useDarkMode from '../hooks/useDarkmode';
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
  const { darkMode } = useDarkMode();

  
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
    <ScrollContainer>
      <div className={`min-h-screen ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-900'}`}>
        <NavigationBar
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
                {(location.pathname === '/' || location.pathname === '' || location.pathname === '/LimBooks' || location.pathname === '/LimBooks/') && <MainPage />}
                
                {/* 인격 페이지 */}
                {location.pathname === '/personality' && (
                  <PersonalityPage />
                )}
                
                {/* 인격 목록 페이지 */}
                {location.pathname.includes('/personality/') && location.pathname.split('/').length === 3 && (
                  <PersonalityStoryList
                    personalityId={location.pathname.split('/')[2]}
                  />
                )}
                
                {/* 인격 스토리 콘텐츠 - PersonalityStoryContent*/}
                {isPersonalityStoryRoute() && (
                  <PersonalityStoryContent />
                )}
                
                {/* 인격 대사집 콘텐츠 - PersonalityVoiceContent*/}
                {isPersonalityVoiceRoute() && (
                  <PersonalityVoiceContent />
                )}

                {/* 아나운서 페이지 */}
                {location.pathname === '/announcers' && (
                  <AnnouncerPage />
                )}
                
                {/* 아나운서 대사 페이지 */}
                {isAnnouncerRoute() && (
                  <AnnouncerContent />
                )}

                
                
                {/* 기존 메인/미니 스토리 리스트 */}
                {(storyType === 'main' || storyType === 'mini') && !storyId && (
                  <StoryList
                    stories={stories}
                    storyType={storyType}
                    handleStoryClick={(story) => handleStoryClick(story, storyType, navigate, location, scrollRef, setShouldRestoreScroll)}
                    loading={loading}
                  />
                )}
                
                {/* 챕터 리스트 */}
                {selectedStory && !chapterId && selectedStory.chapters.length >= 2 && (
                  <ChapterList
                    selectedStory={selectedStory}
                    handleChapterClick={(chapterId) => handleChapterClick(chapterId, storyType, selectedStory, navigate, location, scrollRef, setShouldRestoreScroll)}
                    handleNavigation={(path) => handleNavigation(path, location, scrollRef, setShouldRestoreScroll, navigate)}
                    storyType={storyType}
                  />
                )}
                
                {/* 기존 스토리 컨텐츠 */}
                {chapterId && storyData && (
                  <StoryContent
                    storyData={storyData}
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
        <Footer />
      </div>
    </ScrollContainer>
  );
};

export default StoryReaderPage;