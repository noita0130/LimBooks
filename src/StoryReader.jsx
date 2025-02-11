import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Home, BookOpen, Moon, Sun, Loader2, ChevronRight } from 'lucide-react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';

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

const StoryDialog = ({ dialogs, darkMode }) => (
  <div className="space-y-1 font-dialogs">
    {dialogs.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.01 }}
        className="flex items-start space-x-4"
      >
        <div className={`w-32 py-2 pl-3 font-size-sm font-bold text-right ${darkMode ? 'text-neutral-300' : 'text-black'}`}>
          {item.speaker}
        </div>
        <div className={`flex-1 py-2 pr-3 rounded-lg ${darkMode ? 'bg-neutral-800 text-neutral-300' : 'bg-white text-neutral-900'}`}>
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
        id: "main_0", 
        title: "0 - 어두운 숲", 
        image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/chapter0.png",
        chapters: [
          { id: "main0_1_a", title: "표범, 사자, 그리고 늑대", subtitle: "0-1 전투 전"},
          { id: "main0_1_b", title: "표범, 사자, 그리고 늑대", subtitle: "0-1 전투 후"},
          { id: "main0_2_b", title: "자기소개", subtitle: "0-2 전투 전"},
          { id: "main0_3_b", title: "여행길", subtitle: "0-3 전투 전"},
          { id: "main0_3_a", title: "여행길", subtitle: "0-3 전투 후"},
          { id: "main0_4_b", title: "가능성", subtitle: "0-4 전투 전"},
          { id: "main0_4_a", title: "가능성", subtitle: "0-4 전투 후"}
        ]
      },
      { 
        id: "main_1", 
        title: "1 - 속하지 못하는", 
        image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/chapter1.png",
        chapters: [
          { id: "main1_1_b", title: "부릉부릉", subtitle: "1-1 전투 전"},
          { id: "main1_2_b", title: "댄스 타임", subtitle: "1-2 전투 전"},
          { id: "main1_3_b", title: "전투 전", subtitle: "1-3 전투 전"},
          { id: "main1_4_b", title: "엔케팔린", subtitle: "1-4 전투 전"},
          { id: "main1_5_b", title: "유리", subtitle: "1-5 전투 전"},
          { id: "main1_6_b", title: "지도", subtitle: "1-6 전투 전"},
          { id: "main1_7_b", title: "삼인방", subtitle: "1-7 전투 전"},
          { id: "main1_7_a", title: "삼인방", subtitle: "1-7 전투 후"},
          { id: "main1_8_b", title: "해충", subtitle: "1-8 전투 전"},
          { id: "main1_9_b", title: "가이드", subtitle: "1-7 전투 전"},
          { id: "main1_10_b", title: "8급 해결사", subtitle: "1-10 전투 전"},
          { id: "main1_11_b", title: "D-02 지부", subtitle: "1-11 전투 전"}
        ]
      },
      { 
        id: "main_2", 
        title: "2 - 사랑할 수 없는", 
        image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/Chapter2_before.png",
        chapters: [
          { id: "main1_1_b", title: "부릉부릉", subtitle: "1-1 전투 전"},
          { id: "main1_2_b", title: "댄스 타임", subtitle: "1-2 전투 전"},
          { id: "main1_3_b", title: "전투 전", subtitle: "1-3 전투 전"},
          { id: "main1_4_b", title: "엔케팔린", subtitle: "1-4 전투 전"},
          { id: "main1_5_b", title: "유리", subtitle: "1-5 전투 전"},
          { id: "main1_6_b", title: "지도", subtitle: "1-6 전투 전"},
          { id: "main1_7_b", title: "삼인방", subtitle: "1-7 전투 전"},
          { id: "main1_7_a", title: "삼인방", subtitle: "1-7 전투 후"},
          { id: "main1_8_b", title: "해충", subtitle: "1-8 전투 전"},
          { id: "main1_9_b", title: "가이드", subtitle: "1-7 전투 전"},
          { id: "main1_10_b", title: "8급 해결사", subtitle: "1-10 전투 전"},
          { id: "main1_11_b", title: "D-02 지부", subtitle: "1-11 전투 전"}
        ]
      },
      { 
        id: "main_3", 
        title: "3 - 마주하지 않는", 
        image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/chapter3.png",
        chapters: [
          { id: "main1_1_b", title: "부릉부릉", subtitle: "1-1 전투 전"},
        ]
      },
      { 
        id: "main_4", 
        title: "4 - 변하지 않는", 
        image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/chapter4_before_0.png",
        chapters: [
          { id: "main1_1_b", title: "부릉부릉", subtitle: "1-1 전투 전"},
        ]
      },
      { 
        id: "main_5", 
        title: "5 - 악으로 규정되는", 
        image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/chapter5_before.png",
        chapters: [
          { id: "main1_1_b", title: "부릉부릉", subtitle: "1-1 전투 전"},
        ]
      },
      { 
        id: "main_6", 
        title: "6 - 마음이 어긋나는", 
        image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/chapter6_before.png",
        chapters: [
          { id: "main1_1_b", title: "부릉부릉", subtitle: "1-1 전투 전"},
        ]
      },
      { 
        id: "main_7", 
        title: "7 - 꿈이 끝나는", 
        image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/chapter7_before.png",
        chapters: [
          { id: "main1_1_b", title: "부릉부릉", subtitle: "1-1 전투 전"},
        ]
      },
      
      
    ],
    side: [
      { 
        id: "sub-4_1", 
        title: "우.미.다", 
        image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/chapter-umida.png",
        chapters: [
          { id: "sub-5_1_1", title: "1장: 일상" }
        ]
      },
      { 
        id: "sub-4_1", 
        title: "우.미.다", 
        image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/chapter-umida.png",
        chapters: [
          { id: "sub-5_1_1", title: "1장: 일상" }
        ]
      },
      { 
        id: "sub-4_1", 
        title: "우.미.다", 
        image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/chapter-umida.png",
        chapters: [
          { id: "sub-5_1_1", title: "1장: 일상" }
        ]
      },
      { 
        id: "sub-4_1", 
        title: "우.미.다", 
        image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/chapter-umida.png",
        chapters: [
          { id: "sub-5_1_1", title: "1장: 일상" }
        ]
      },
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
                        transition={{ delay: index * 0.05 }}
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
                      className={`px-4 py-2 rounded-md ${
                        darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
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
                        transition={{ delay: index * 0.04 }}
                        onClick={() => handleChapterClick(chapter.id)}
                        className={`${
                          darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-100 hover:bg-neutral-200'
                        } p-4 rounded-lg cursor-pointer transition-colors duration-200`}
                      >
                        <h3 className="text-lg font-semibold">
                          {chapter.title} {chapter.subtitle && <span className="text-base text-neutral-400"> {chapter.subtitle}</span>}
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
                      className={`px-4 py-2 rounded-md ${
                        darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
                      }`}
                    >
                      ← 돌아가기
                    </button>
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