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
import { Undo2 } from 'lucide-react';

// 새로운 함수 import
import LoadPersonalityStory from '../utill/LoadPersonalityStory';
import LoadPersonalityVoice from '../utill/LoadPersonalityVoice';

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
  const { storyType, storyId, chapterId, personalityId, contentType } = useParams();
  const scrollRef = useRef(new Map());
  const [selectedStory, setSelectedStory] = useState(null);
  const [storyData, setStoryData] = useState(null);
  const [shouldRestoreScroll, setShouldRestoreScroll] = useState(false);
  const { stories, loading } = useStoryData(storyType);
  const [personalityContent, setPersonalityContent] = useState(null);
  const [personalityStoryData, setPersonalityStoryData] = useState(null);

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

  // 인격 스토리/대사집 로딩 로직 추가
useEffect(() => {
  // personalityId와 contentType(story 또는 voice)가 있는 경우
  if (personalityId && contentType && storyId) {
    const fetchPersonalityContent = async () => {
      try {
        if (contentType === 'story') {
          // 스토리 데이터 로드
          const data = await LoadPersonalityStory(personalityId, storyId);
          setPersonalityContent(data);
          
          // StoryDialog 컴포넌트와 호환되도록 데이터 설정
          // dataList 형태인 경우 직접 사용 가능
          if (data.dataList) {
            setPersonalityStoryData({
              id: storyId,
              title: data.title || '제목 없음',
              dataList: data.dataList
            });
          }
          // dialogues 형태인 경우 변환 필요
          else if (data.dialogues) {
            setPersonalityStoryData({
              id: storyId,
              title: data.title || '제목 없음',
              dataList: data.dialogues?.map(dialogue => ({
                model: dialogue.speaker || null,
                teller: dialogue.narrator || null,
                content: dialogue.text || '',
                place: dialogue.location || null,
                type: dialogue.type || 'text'
              })) || []
            });
          }
        } else if (contentType === 'voice') {
          // 대사집 데이터 로드
          const data = await LoadPersonalityVoice(personalityId, storyId);
          setPersonalityContent(data);
        }
      } catch (error) {
        console.error('인격 데이터 로딩 오류:', error);
      }
      
      if (!shouldRestoreScroll) {
        window.scrollTo(0, 0);
      }
    };
    
    fetchPersonalityContent();
  } else {
    setPersonalityContent(null);
    setPersonalityStoryData(null);
  }
}, [personalityId, contentType, storyId, shouldRestoreScroll]);

  // URL 패턴 감지 및 경로 설정 함수
  const isPersonalityStoryRoute = () => {
    // /personality/:personalityId/story/:storyId 형태의 URL 패턴 확인
    return location.pathname.match(/\/personality\/[^\/]+\/story\/[^\/]+/);
  };

  const isPersonalityVoiceRoute = () => {
    // /personality/:personalityId/voice/:storyId 형태의 URL 패턴 확인
    return location.pathname.match(/\/personality\/[^\/]+\/voice\/[^\/]+/);
  };

  // 인격 스토리 렌더링 함수
  const renderPersonalityStoryContent = () => {
    if (!personalityStoryData) return <LoadingSpinner />;

    return (
      <div className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} p-3 md:p-6 rounded-lg shadow-lg`}>
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => handleGoBack(navigate, location, scrollRef, setShouldRestoreScroll)}
            className={`px-4 py-2 rounded-md ${
              darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
            }`}
          >
            <Undo2 />
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-center flex-1">{personalityStoryData.title}</h1>
          <div className="w-[48px]"></div> {/* 균형을 위한 빈 공간 */}
        </div>

        {/* 스토리 내용 - StoryDialog 컴포넌트 사용 */}
        <StoryDialog
          dataList={personalityStoryData.dataList}
          darkMode={darkMode}
        />

        {/* 하단 네비게이션 */}
        <div className="flex justify-start items-center mt-6">
          <button
            onClick={() => handleGoBack(navigate, location, scrollRef, setShouldRestoreScroll)}
            className={`px-4 py-2 rounded-md ${
              darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
            }`}
          >
            <Undo2 />
          </button>
        </div>
      </div>
    );
  };

  return (
    <ScrollContainer darkMode={darkMode}>
      
      <Helmet>
        <meta name="google-site-verification" content="Sx2a79nNCfoTBZTrBoUBsDlFjGlRQoA2u_AqN2QSreI" />
        <title>LimBooks - 림버스 스토리 리더</title>
        <meta name="description" content="LimBooks에서 간단히 림버스를." />
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
                
                {/* 인격 페이지 */}
                {location.pathname === '/personality' && (
                  <PersonalityPage darkMode={darkMode}/>
                )}
                
                {/* 인격 목록 페이지 */}
                {location.pathname.includes('/personality/') && location.pathname.split('/').length === 3 && (
                  <PersonalityStoryList
                    darkMode={darkMode}
                    personalityId={location.pathname.split('/')[2]}
                  />
                )}
                
                {/* 인격 스토리 콘텐츠 - StoryDialog 컴포넌트 사용 */}
                {isPersonalityStoryRoute() && personalityStoryData && renderPersonalityStoryContent()}
                
                {/* 인격 대사집 콘텐츠 */}
                {isPersonalityVoiceRoute() && personalityContent && (
                  <div className={`p-6 rounded-lg ${darkMode ? 'bg-neutral-800' : 'bg-white'} shadow-md`}>
                    <div className="flex justify-between items-center mb-6">
                      <button
                        onClick={() => handleGoBack(navigate, location, scrollRef, setShouldRestoreScroll)}
                        className={`px-4 py-2 rounded-md ${
                          darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
                        }`}
                      >
                        <Undo2 />
                      </button>
                      <h1 className="text-xl md:text-2xl font-bold text-center flex-1">{personalityContent.title} 대사집</h1>
                      <div className="w-[48px]"></div> {/* 균형을 위한 빈 공간 */}
                    </div>
                    
                    {/* 카테고리별로 대사집 그룹화하여 표시 */}
                    <div className="space-y-6">
                      {Object.entries(personalityContent.quotes.reduce((acc, quote) => {
                        const category = quote.category || '기타';
                        if (!acc[category]) {
                          acc[category] = [];
                        }
                        acc[category].push(quote);
                        return acc;
                      }, {})).map(([category, quotes]) => (
                        <div key={category} className="mb-8">
                          <h2 className={`text-xl font-semibold mb-4 pb-2 ${
                            darkMode ? 'border-b border-neutral-700' : 'border-b border-neutral-300'
                          }`}>
                            {category}
                          </h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {quotes.map((quote, index) => (
                              <div 
                                key={index} 
                                className={`p-4 rounded-lg transition-all hover:shadow-md ${
                                  darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-100 hover:bg-neutral-200'
                                }`}
                              >
                                <div className="flex flex-col">
                                  <p className="font-bold mb-2">{quote.situation}</p>
                                  <p className="italic">{quote.text}</p>
                                  {quote.condition && (
                                    <p className={`mt-2 text-sm ${
                                      darkMode ? 'text-neutral-400' : 'text-neutral-600'
                                    }`}>
                                      조건: {quote.condition}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-start items-center mt-6">
                      <button
                        onClick={() => handleGoBack(navigate, location, scrollRef, setShouldRestoreScroll)}
                        className={`px-4 py-2 rounded-md ${
                          darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
                        }`}
                      >
                        <Undo2 />
                      </button>
                    </div>
                  </div>
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
      </div>
    </ScrollContainer>
  );
};

export default StoryReaderPage;