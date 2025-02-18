// components/ChapterList.jsx
import { motion } from 'framer-motion';



const ChapterList = ({ selectedStory, darkMode, handleChapterClick, handleNavigation, storyType }) => {

    const StoryNavigationButtons = () => {
        <div className={`rounded-lg font-normal overflow-hidden flex ${darkMode ? 'bg-neutral-700' : 'bg-neutral-200'}`}>
            <button
                //onClick={handleGoBack}
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
                //onClick={handleGoBack}
                className={`px-4 py-2 ${darkMode ? 'hover:bg-neutral-600' : 'hover:bg-neutral-300'
                    }`}
            >
                다음 챕터→
            </button>
        </div>
    }
    
    return (
        <div className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                    <button
                        onClick={() => handleNavigation(`/${storyType}`)}
                        className={`px-4 py-2 rounded-md ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
                            }`}
                    >
                        ← 돌아가기
                    </button>
                    <h2 className="ml-4 text-2xl font-bold">{selectedStory.title}</h2>
                </div>
                <StoryNavigationButtons />

            </div>

            <div className="space-y-4">
                {selectedStory.chapters.map((chapter, index) => (
                    <motion.div
                        key={chapter.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.01 }}
                        onClick={() => handleChapterClick(chapter.id)}
                        className={`${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
                            } p-4 rounded-lg cursor-pointer `}
                    >
                        <h3 className="text-lg font-semibold">
                            {index + 1}{"."} {chapter.title} {chapter.subtitle &&
                                <span className={`${darkMode ? 'text-neutral-400' : ' text-neutral-500'} text-base ml-2`}
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