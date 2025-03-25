// StoryReaderPage.jsx (완전히 수정된 버전)
import React, { useState, useEffect, Suspense, useRef } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import MainPage from './MainPage';
import useStoryData from '../hooks/useStoryData';
import NavigationBar from '../components/NavigationBar';
import StoryList from './StoryList';
import ChapterList from './ChapterList';
import StoryContent from './StoryContent';
import PersonalityPage from './PersonalityPage';
import PersonalityStoryList from './PersonalityStoryList';
import EgogiftPage from './EgogiftPage';
import PersonalityStoryContent from './PersonalityStoryContent';
import PersonalityVoiceContent from './PersonalityVoiceContent';
import AnnouncerContent from './AnnouncerContent';
import AnnouncerPage from './AnnouncerPage'; 
import EgoList from './EgoList';

// 컴포넌트 임포트
import PageTransition from '../components/PageTransition';
import { getPageBgStyle, getTextStyle } from '../components/TransitionStyles';
import Footer from '../components/footer';

// 유틸리티 함수 임포트
import LoadingSpinner from '../utill/LoadingSpinner';
import handleGoBack from '../utill/handleGoBack';
import ScrollContainer from '../utill/ScrollContainer';
import { navigateToNextStory, navigateToPreviousStory } from '../utill/navigateStoryButton';
import loadChapterData from '../utill/loadChapterData';
import useDarkMode from '../hooks/useDarkmode';

import {
  restoreScrollPosition,
  handleStoryClick,
  handleChapterClick,
  handleNavigation,
  navigateToNextChapter,
  navigateToPreviousChapter
} from '../utill/function';

// 페이지 전환 애니메이션 속도 조정
const pageTransitionVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 }
};

const StoryReaderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { storyType, storyId, chapterId, personalityId } = useParams();
  const scrollRef = useRef(new Map());
  const [selectedStory, setSelectedStory] = useState(null);
  const [storyData, setStoryData] = useState(null);
  const [shouldRestoreScroll, setShouldRestoreScroll] = useState(false);
  const { stories, loading } = useStoryData(storyType);
  const { darkMode } = useDarkMode();
  
  // 디버깅용 경로 추적
  const [currentPath, setCurrentPath] = useState(location.pathname);
  
  useEffect(() => {
    // 경로 변경 추적 (디버깅용)
    if (currentPath !== location.pathname) {
      console.log(`Route changed: ${currentPath} -> ${location.pathname}`);
      setCurrentPath(location.pathname);
    }
  }, [location.pathname, currentPath]);

  // 일반 스토리 로딩 로직
  useEffect(() => {
    if (storyType && storyId && stories?.[storyType]) {
      const story = stories[storyType].find(s => s.id === storyId);
      setSelectedStory(story);

      if (chapterId) {
        const fetchData = async () => {
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

  // URL 패턴 감지 함수들
  const isPersonalityStoryRoute = () => {
    return location.pathname.match(/\/sinner\/personality\/[^\/]+\/story\/[^\/]+/);
  };

  const isPersonalityVoiceRoute = () => {
    return location.pathname.match(/\/sinner\/personality\/[^\/]+\/voice\/[^\/]+/);
  };

  const isEgoListRoute = () => {
    return location.pathname.match(/\/sinner\/ego\/[^\/]+$/);
  };

  const isAnnouncerRoute = () => {
    return location.pathname.match(/\/announcers\/[^\/]+$/);
  };
  
  const isAnnouncersListRoute = () => {
    return location.pathname === '/announcers';
  };

  const isEGOgiftRoute = () => {
    return location.pathname === '/EGOgift'
  }



  // 스크롤 위치 복원 핸들러
  const handleAnimationComplete = () => {
    if (shouldRestoreScroll) {
      restoreScrollPosition(scrollRef, location.pathname);
    }
  };

  // 현재 경로에 맞는 컴포넌트 렌더링 함수
  const renderRouteContent = () => {
    // 홈 페이지 경로
    if (location.pathname === '/' || location.pathname === '' || 
        location.pathname === '/LimBooks' || location.pathname === '/LimBooks/') {
      return <MainPage />;
    }

    // 인격 페이지
    if (location.pathname === '/sinner') {
      return <PersonalityPage />;
    }

    // 인격 목록 페이지
    if (location.pathname.includes('/sinner/personality/') && 
        location.pathname.split('/').length === 4) {
      return <PersonalityStoryList personalityId={location.pathname.split('/')[3]} />;
    }

    // 인격 스토리 콘텐츠
    if (isPersonalityStoryRoute()) {
      return <PersonalityStoryContent />;
    }

    // 인격 대사집 콘텐츠
    if (isPersonalityVoiceRoute()) {
      return <PersonalityVoiceContent />;
    }

    // E.G.O 목록
    if (isEgoListRoute()) {
      return <EgoList personalityId={location.pathname.split('/')[3]} />;
    }

    // 아나운서 페이지
    if (isAnnouncersListRoute()) {
      return <AnnouncerPage />;
    }

    // 아나운서 대사 페이지
    if (isAnnouncerRoute()) {
      return <AnnouncerContent />;
    }

    // 에고기프트
    if (isEGOgiftRoute()){
      return <EgogiftPage />
    }



    // 메인/미니 스토리 목록
    if ((storyType === 'main' || storyType === 'mini') && !storyId) {
      return (
        <StoryList
          stories={stories}
          storyType={storyType}
          handleStoryClick={(story) => handleStoryClick(story, storyType, navigate, location, scrollRef, setShouldRestoreScroll)}
          loading={loading}
        />
      );
    }

    // 챕터 목록
    if (selectedStory && !chapterId && selectedStory.chapters.length >= 2) {
      return (
        <ChapterList
          selectedStory={selectedStory}
          handleChapterClick={(chapterId) => handleChapterClick(chapterId, storyType, selectedStory, navigate, location, scrollRef, setShouldRestoreScroll)}
          handleNavigation={(path) => handleNavigation(path, location, scrollRef, setShouldRestoreScroll, navigate)}
          storyType={storyType}
        />
      );
    }

    // 스토리 콘텐츠
    if (chapterId && storyData) {
      return (
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
      );
    }

    return null;
  };

  // 배경과 텍스트 스타일을 위한 클래스
  const containerClasses = `min-h-screen ${getPageBgStyle(darkMode)} ${getTextStyle(darkMode)}`;

  return (
    <ScrollContainer>
      <div className={containerClasses}>
        <NavigationBar
          handleNavigation={(path) => handleNavigation(path, location, scrollRef, setShouldRestoreScroll, navigate)}
          location={location}
        />
        <main className="max-w-6xl min-h-screen mx-auto px-4 py-8 font-NotoSerifKR">
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <PageTransition
                key={location.pathname} // 모든 경로에 동일한 방식으로 key 적용
                variants={pageTransitionVariants}
                onAnimationComplete={handleAnimationComplete}
              >
                {renderRouteContent()}
              </PageTransition>
            </AnimatePresence>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ScrollContainer>
  );
};

export default StoryReaderPage;