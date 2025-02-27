// components/ChapterList.jsx
import { motion } from 'framer-motion';

const ChapterList = ({ selectedStory, darkMode, handleChapterClick, handleNavigation, storyType }) => {

    const StoryNavigationButtons = () => (
        <div className={`rounded-lg font-normal overflow-hidden flex ${darkMode ? 'bg-neutral-700' : 'bg-neutral-200'}`}>
            <button
                className={`px-4 py-2 ${darkMode ? 'hover:bg-neutral-600' : 'hover:bg-neutral-300'
                    }`}
            >
                ← 이전 챕터
            </button>
            <div className="flex items-center">
                <div className={`h-6 w-[1px] ${darkMode ? 'bg-neutral-600' : 'bg-neutral-300'
                    }`}></div>
            </div>
            <button
                className={`px-4 py-2 ${darkMode ? 'hover:bg-neutral-600' : 'hover:bg-neutral-300'
                    }`}
            >
                다음 챕터→
            </button>
        </div>
    );
    
    return (
        <div className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} p-4 md:p-6 rounded-lg shadow-lg`}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 space-y-3 md:space-y-0">
                <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0">
                    <button
                        onClick={() => handleNavigation(`/${storyType}`)}
                        className={`px-4 py-2 rounded-md w-full md:w-auto ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
                            }`}
                    >
                        ← 돌아가기
                    </button>
                    <h2 className="md:ml-4 text-xl md:text-2xl font-bold mt-2 md:mt-0">{selectedStory.title}</h2>
                </div>
                
                {/* 모바일에서는 숨김, 데스크탑에서만 표시 */}
                <div className="hidden md:block">
                    <StoryNavigationButtons />
                </div>
            </div>

            <div className="space-y-3 md:space-y-4">
                {selectedStory.chapters.map((chapter, index) => (
                    <motion.div
                        key={chapter.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.01 }}
                        onClick={() => handleChapterClick(chapter.id)}
                        className={`${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
                            } p-3 md:p-4 rounded-lg cursor-pointer `}
                    >
                        <h3 className="text-base md:text-lg font-semibold break-words">
                            {index + 1}{"."} {chapter.title} {chapter.subtitle &&
                                <span className={`${darkMode ? 'text-neutral-400' : ' text-neutral-500'} text-sm md:text-base ml-1 md:ml-2 block md:inline mt-1 md:mt-0`}
                                >
                                    {chapter.subtitle}
                                </span>}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ChapterList;