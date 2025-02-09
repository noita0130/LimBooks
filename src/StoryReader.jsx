import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Home, BookOpen, Moon, Sun, Loader2, ChevronRight } from 'lucide-react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';

const HomePage = React.lazy(() => Promise.resolve({
  default: () => (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">환영합니다</h1>
      <p className="text-gray-600 dark:text-gray-400">스토리리더에서 다양한 이야기를 만나보세요.</p>
    </div>
  )
}));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-64">
    <Loader2 className="w-8 h-8 animate-spin text-blue-600 dark:text-blue-400" />
  </div>
);

const StoryDialog = ({ dialogs, darkMode }) => (
  <div className="space-y-1">
    {dialogs.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.01 }}
        className="flex items-start space-x-4"
      >
        <div className={`w-32 p-3 font-bold text-right ${darkMode ? 'text-gray-100' : 'text-black'}`}>
          {item.speaker}
        </div>
        <div className={`flex-1 p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}>
          {item.dialog}
        </div>
      </motion.div>
    ))}
  </div>
);

const StoryReaderContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { storyType, storyId, chapterId } = useParams();
  
  const [darkMode, setDarkMode] = useState(true);
  const [stories, setStories] = useState({
    main: [
      { 
        id: "main_1", 
        title: "0 - 프롤로그", 
        image: "/api/placeholder/200/200",
        chapters: [
          { id: "main0_1_a", title: "표범, 사자, 그리고 늑대", subtitle: "0-1 전투 전"},
          { id: "main0_1_b", title: "표범, 사자, 그리고 늑대", subtitle: "0-1 전투 후"},
          { id: "main_1_3", title: "0-2 전투 전" }
        ]
      },
      { 
        id: "main_2", 
        title: "2 번째 메인 스토리", 
        image: "/api/placeholder/200/200",
        chapters: [
          { id: "main_2_1", title: "1장: 새로운 시작" },
          { id: "main_2_2", title: "2장: 도전" }
        ]
      }
    ],
    side: [
      { 
        id: "sub-5_1", 
        title: "첫 번째 사이드 스토리", 
        image: "/api/placeholder/200/200",
        chapters: [
          { id: "sub-5_1_1", title: "1장: 일상" },
          { id: "sub-5_1_2", title: "2장: 변화" }
        ]
      }
    ]
  });
  
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
                const wordCount = data.dialogs.reduce(
                  (acc, curr) => acc + curr.dialog.length, 
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

  const handleNavigation = (path) => {
    navigate(path);
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
      ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* 네비게이션 바 */}
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
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
                      ? (darkMode ? 'bg-gray-700 text-white' : 'bg-gray-900 text-white')
                      : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200')}`}
                >
                  <Home className="w-4 h-4 mr-2" />
                  홈
                </button>
                <button
                  onClick={() => handleNavigation('/main')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                    ${location.pathname.startsWith('/main')
                      ? (darkMode ? 'bg-gray-700 text-white' : 'bg-gray-900 text-white')
                      : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200')}`}
                >
                  <Book className="w-4 h-4 mr-2" />
                  메인
                </button>
                <button
                  onClick={() => handleNavigation('/side')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                    ${location.pathname.startsWith('/side')
                      ? (darkMode ? 'bg-gray-700 text-white' : 'bg-gray-900 text-white')
                      : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200')}`}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  사이드
                </button>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-md ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* 메인 컨텐츠 영역 */}
      <main className="max-w-6xl mx-auto px-4 py-8">
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
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleStoryClick(story)}
                        className={`${darkMode ? 'bg-gray-800' : 'bg-white'} 
                          rounded-lg shadow-md p-4 flex items-center space-x-4 cursor-pointer
                          hover:shadow-lg transition-shadow duration-200`}
                      >
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-50 h-32 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
                          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            총 {story.chapters.length}개의 챕터
                          </p>
                          {story.wordCount !== undefined && (
                            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              전체 글자 수: {story.wordCount}
                            </p>
                          )}
                        </div>
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                      </motion.div>
                    ))
                  )}
                </div>
              )}

              {/* 챕터 목록 */}
              {selectedStory && !chapterId && (
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
                  <div className="flex items-center mb-6">
                    <button
                      onClick={() => handleNavigation(`/${storyType}`)}
                      className={`px-4 py-2 rounded-md ${
                        darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
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
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleChapterClick(chapter.id)}
                        className={`${
                          darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                        } p-4 rounded-lg cursor-pointer transition-colors duration-200`}
                      >
                        <h3 className="text-lg font-semibold">
                          {chapter.title} {chapter.subtitle && <span className="text-base text-gray-400"> {chapter.subtitle}</span>}
                        </h3>
                        {chapter.wordCount !== undefined && (
                          <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            글자 수: {chapter.wordCount}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* 챕터 내용 */}
              {chapterId && storyData && (
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
                  <div className="flex items-center mb-6">
                    <button
                      onClick={() => handleNavigation(`/${storyType}/${selectedStory.id}`)}
                      className={`px-4 py-2 rounded-md ${
                        darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      ← 돌아가기
                    </button>
                    <h2 className="ml-4 text-2xl font-bold">
                      {selectedStory.title} - {storyData?.title || "챕터 내용"}
                    </h2>
                  </div>

                  {/* 챕터 내용 표시 */}
                  <StoryDialog dialogs={storyData?.dialogs || []} darkMode={darkMode} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>
    </div>
  );
};

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