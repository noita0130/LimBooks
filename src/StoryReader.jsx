import React, { useState, useEffect, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Home, BookOpen, Moon, Sun, Loader2, ChevronRight } from 'lucide-react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';

import useScrollRestoration from './useScrollRestoration';
import storiesData from './storiesData';

//^\s*"id"\s*:\s*\d+\s*,?\n|^\s*"teller"\s*:\s*".*?"\s*,?\n

const HomePage = React.lazy(() => Promise.resolve({
  default: () => (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">환영합니다</h1>
      <p className="text-neutral-600 dark:text-neutral-400">스토리리더에서 다양한 이야기를 만나보세요.</p>
    </div>
  )
}));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-64">
    <Loader2 className="w-8 h-8 animate-spin text-blue-600 dark:text-blue-400" />
  </div>
);

const StoryDialog = ({ dataList, darkMode }) => {
  // 이미지 URL인지 확인하는 함수
  const isImageUrl = (str) => {
    return str?.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

  return (
    <div className="space-y-1 font-dialogs">
      {dataList.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.01 }}
          className="flex items-start space-x-4"
        >
          <div className={`w-32 py-2 pl-3 font-size-sm text-right ${darkMode ? 'text-neutral-400' : 'text-black'}`}>
            {item.teller || item.model}
          </div>
          <div className={`flex-1 py-2 pr-3 pl-2 rounded-lg ${darkMode ? 'bg-neutral-800 text-neutral-300' : 'bg-white text-neutral-900'}`}>
            {/* type 필드가 없거나 text인 경우 텍스트로 처리 */}
            {(!item.type || item.type === 'text') && (
              item.content
            )}
            {/* type 필드가 image이고, content가 이미지 URL인 경우 이미지로 처리 */}
            {item.type === 'image' && isImageUrl(item.content) && (
              <img
                src={item.content}
                alt="Story content"
                className="max-w-full h-auto rounded"
              />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const StoryReaderContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { storyType, storyId, chapterId } = useParams();
  const { saveScrollPosition, restoreScrollposition, scrollToTop } = useScrollRestoration();


  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  //뒤로가기 > 스크롤위치복원
  useEffect(() => {
    const handlePopState = () => {
      const key = location.pathname;
      restoreScrollposition(key);
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location.pathname, restoreScrollposition]);

  //내용클릭시 스크롤위치저장
  const handleNavigation = (path) => {
    saveScrollPosition(location.pathname);
    navigate(path);
  };

  // "돌아가기" 버튼 클릭 시 스크롤 위치 저장
  const handleGoBack = () => {
    saveScrollPosition(location.pathname); // 현재 페이지의 스크롤 위치 저장
    navigate(-1); // 뒤로가기
  };


  const [stories, setStories] = useState(storiesData);
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
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
    // URL 파라미터에 따라 상태 업데이트
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
  }, [storyType, storyId, chapterId]);

  useEffect(() => {
    if (storyType === 'main' || storyType === 'side') {
      setLoading(true);
      calculateWordCounts();
    }
  }, [storyType]);

  const calculateWordCounts = async () => {
    try {
      const updatedStories = await Promise.all(
        stories[storyType].map(async (story) => {
          const chapterCounts = await Promise.all(
            story.chapters.map(async (chapter) => {
              try {
                const response = await import(`./story/${chapter.id}.json`);
                const data = response.default;
                const wordCount = data.dataList.reduce(
                  (acc, curr) => acc + curr.content.length,
                  0
                );
                return { ...chapter, wordCount };
              } catch (error) {
                console.error(`챕터 ${chapter.id} 데이터 로드 실패:`, error);
                return { ...chapter, wordCount: 0 };
              }
            })
          );

          const totalWordCount = chapterCounts.reduce(
            (acc, chapter) => acc + chapter.wordCount,
            0
          );

          return {
            ...story,
            chapters: chapterCounts,
            wordCount: totalWordCount
          };
        })
      );

      setStories(prev => ({
        ...prev,
        [storyType]: updatedStories
      }));
    } catch (error) {
      console.error('글자 수 계산 중 오류 발생:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadChapterData = async (chapterId) => {
    try {
      const response = await import(`./story/${chapterId}.json`);
      const data = response.default;
      setStoryData(data);
    } catch (error) {
      console.error('챕터 데이터를 불러오는데 실패했습니다:', error);
    }
  };

  const handleStoryClick = (story) => {
    handleNavigation(`/${storyType}/${story.id}`);
  };

  const handleChapterClick = (chapterId) => {
    handleNavigation(`/${storyType}/${selectedStory.id}/${chapterId}`);
  };

  

  return (
    <div className={`min-h-screen transition-colors duration-200 
      ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-900'}`}>
      {/* 네비게이션 바 */}
      <nav className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0 font-bold text-xl">
                스토리리더
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleNavigation('/')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                    ${location.pathname === '/'
                      ? (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white')
                      : (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`}
                >
                  <Home className="w-4 h-4 mr-2" />
                  홈
                </button>
                <button
                  onClick={() => handleNavigation('/main')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                    ${location.pathname.startsWith('/main')
                      ? (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white')
                      : (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`}
                >
                  <Book className="w-4 h-4 mr-2" />
                  메인
                </button>
                <button
                  onClick={() => handleNavigation('/side')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                    ${location.pathname.startsWith('/side')
                      ? (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white')
                      : (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  사이드
                </button>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-md ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* 메인 컨텐츠 영역 */}
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
              {/* 홈 페이지 */}
              {location.pathname === '/' && <HomePage />}

              {/* 스토리 목록 */}
              {(storyType === 'main' || storyType === 'side') && !storyId && (
                <div className="space-y-6">
                  {loading ? (
                    <LoadingSpinner />
                  ) : (
                    stories[storyType].map((story, index) => (
                      <motion.div
                        key={story.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        onClick={() => handleStoryClick(story)}
                        className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} 
                          rounded-lg shadow-md p-4 flex items-center space-x-8 cursor-pointer
                          hover:shadow-lg transition-shadow duration-200`}
                      >
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-60 h-28 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
                          <p className={`${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                            총 {story.chapters.length}개의 챕터
                          </p>
                          {story.wordCount !== undefined && (
                            <p className={`${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                              전체 글자 수: {story.wordCount}
                            </p>
                          )}
                        </div>
                        <ChevronRight className="w-6 h-6 text-neutral-400" />
                      </motion.div>
                    ))
                  )}
                </div>
              )}

              {/* 챕터 목록 */}
              {selectedStory && !chapterId && (
                <div className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
                  <div className="flex items-center mb-6">
                    <button
                      onClick={() => handleNavigation(`/${storyType}`)}
                      className={`px-4 py-2 rounded-md ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
                        }`}
                    >
                      ← 돌아가기
                    </button>
                    <h2 className="ml-4 text-2xl font-bold">{selectedStory.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {selectedStory.chapters.map((chapter, index) => (
                      <motion.div
                        key={chapter.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.02 }}
                        onClick={() => handleChapterClick(chapter.id)}
                        className={`${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-100 hover:bg-neutral-200'
                          } p-4 rounded-lg cursor-pointer transition-colors duration-200`}
                      >
                        <h3 className="text-lg font-semibold">
                          {index + 1}{"."} {chapter.title} {chapter.subtitle && <span className="text-base text-neutral-400"> {chapter.subtitle}</span>}
                        </h3>
                        {/*{chapter.wordCount !== undefined && (
                          <p className={`mt-2 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                            글자 수: {chapter.wordCount}
                          </p>
                        )}*/}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* 챕터 내용 */}
              {chapterId && storyData && (
                <div className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
                  <div className="flex items-center mb-6">
                    <button
                      onClick={() => handleNavigation(`/${storyType}/${selectedStory.id}`)}
                      className={`px-4 py-2 rounded-md ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
                        }`}
                    >
                      ← 돌아가기
                    </button>
                  </div>

                  {/* 챕터 내용 표시 */}
                  <StoryDialog dataList={storyData?.dataList || []} darkMode={darkMode} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>
    </div>
  );
};

console.log('storyType:', storyType);
console.log('stories:', stories);
console.log('loading:', loading);

const StoryReader = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoryReaderContent />}>
          <Route path=":storyType" element={<StoryReaderContent />}>
            <Route path=":storyId" element={<StoryReaderContent />}>
              <Route path=":chapterId" element={<StoryReaderContent />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default StoryReader;