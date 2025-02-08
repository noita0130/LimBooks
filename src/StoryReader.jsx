import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Home, BookOpen, Moon, Sun, Loader2 } from 'lucide-react';

// 지연 로딩을 위한 페이지 컴포넌트들
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
  <div className="space-y-0">
    {dialogs.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-start space-x-4"
      >
        <div className={`w-24 p-3 font-bold text-right ${darkMode ? 'text-gray-100' : 'text-black'}`}>
          {item.speaker}
        </div>
        <div className={`flex-1 p-3 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
          {item.dialog}
        </div>
      </motion.div>
    ))}
  </div>
);

const StoryReader = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [stories, setStories] = useState({
    main: [
      { id: "main_1", title: "1 번째 메인 스토리", image: "/api/placeholder/200/200" },
      { id: "main_2", title: "2 번째 메인 스토리", image: "/api/placeholder/200/200" },
      { id: "main_3", title: "3 번째 메인 스토리", image: "/api/placeholder/200/200" },
      { id: "main_4", title: "4 번째 메인 스토리", image: "/api/placeholder/200/200" },
      { id: "main_5", title: "5 번째 메인 스토리", image: "/api/placeholder/200/200" },
      { id: "main_6", title: "6 번째 메인 스토리", image: "/api/placeholder/200/200" },
      { id: "main_7", title: "7 번째 메인 스토리", image: "/api/placeholder/200/200" },
    ],
    side: [
      { id: "sub-5_1", title: "첫 번째 사이드 스토리", image: "/api/placeholder/200/200" },
      { id: "sub-5_2", title: "두 번째 사이드 스토리", image: "/api/placeholder/200/200" },
    ]
  });
  const [loading, setLoading] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [storyData, setStoryData] = useState(null);

  // 다크모드 토글
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // 메인 또는 사이드 스토리 탭이 활성화될 때 글자수 계산
  useEffect(() => {
    if (currentPage === 'main' || currentPage === 'side') {
      setLoading(true);

      const calculateWordCounts = async () => {
        const updatedStories = await Promise.all(
          stories[currentPage].map(async (story) => {
            try {
              const response = await import(`./story/${story.id}.json`);
              const data = response.default;
              const wordCount = data.dialogs.reduce((acc, curr) => acc + curr.dialog.length, 0);
              return { ...story, wordCount };
            } catch (error) {
              console.error(`스토리 ${story.id} 데이터를 불러오는데 실패했습니다:`, error);
              return { ...story, wordCount: 0 };
            }
          })
        );

        setStories((prevStories) => ({
          ...prevStories,
          [currentPage]: updatedStories,
        }));

        setLoading(false);
      };

      calculateWordCounts();
    }
  }, [currentPage]);

  // 스토리 클릭 시 대화 내용 불러오기
  const handleStoryClick = async (storyId) => {
    try {
      const response = await import(`./story/${storyId}.json`);
      const data = response.default;
      setStoryData(data); // JSON 파일의 데이터를 storyData 상태에 저장
      setSelectedStory(storyId); // 선택된 스토리 ID 설정
    } catch (error) {
      console.error('스토리 데이터를 불러오는데 실패했습니다:', error);
    }
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
                  onClick={() => { setCurrentPage('home'); setSelectedStory(null); }}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                    ${currentPage === 'home' 
                      ? (darkMode ? 'bg-gray-700 text-white' : 'bg-gray-900 text-white')
                      : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200')}`}
                >
                  <Home className="w-4 h-4 mr-2" />
                  홈
                </button>
                <button
                  onClick={() => { setCurrentPage('main'); setSelectedStory(null); }}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                    ${currentPage === 'main'
                      ? (darkMode ? 'bg-gray-700 text-white' : 'bg-gray-900 text-white')
                      : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200')}`}
                >
                  <Book className="w-4 h-4 mr-2" />
                  메인
                </button>
                <button
                  onClick={() => { setCurrentPage('side'); setSelectedStory(null); }}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                    ${currentPage === 'side'
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
              key={currentPage + (selectedStory || '')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentPage === 'home' && !selectedStory && <HomePage />}

              {(currentPage === 'main' || currentPage === 'side') && !selectedStory && (
                <div className="space-y-6">
                  {loading ? (
                    <LoadingSpinner />
                  ) : (
                    stories[currentPage].map((story, index) => (
                      <motion.div
                        key={story.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleStoryClick(story.id)}
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
                          {story.wordCount !== undefined && (
                            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              글자 수: {story.wordCount}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              )}

              {selectedStory && (
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
                  <button
                    onClick={() => setSelectedStory(null)}
                    className={`mb-4 px-4 py-2 rounded-md ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    ← 목록으로
                  </button>
                  {/* darkMode prop을 StoryDialog에 전달 */}
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

export default StoryReader;