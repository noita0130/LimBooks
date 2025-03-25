// components/ChapterList.jsx (개선된 버전)
import { motion } from 'framer-motion';
import { Undo2 } from 'lucide-react';
import useDarkMode from '../hooks/useDarkmode';
import { 
  backgroundTransition, 
  buttonTransition,
  getBgStyle, 
  getButtonStyle, 
  getTextStyle, 
  getSubTextStyle 
} from '../components/TransitionStyles';

const ChapterList = ({ selectedStory, handleChapterClick, handleNavigation, storyType }) => {
    const { darkMode } = useDarkMode();
    
    const getChapterItemStyle = () => `${backgroundTransition} ${
        darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
    } p-3 md:p-4 rounded-lg cursor-pointer`;
    
    const getBackButtonStyle = () => `px-4 py-2 rounded-md ${buttonTransition} ${
        darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
    }`;
    
    const StoryNavigationButtons = () => (
        <div className={`rounded-lg font-normal overflow-hidden flex ${backgroundTransition} ${darkMode ? 'bg-neutral-700' : 'bg-neutral-200'}`}>
            <button
                className={`px-4 py-2 ${buttonTransition} ${darkMode ? 'hover:bg-neutral-600' : 'hover:bg-neutral-300'}`}
            >
                ← 이전 챕터
            </button>
            <div className="flex items-center">
                <div className={`h-6 w-[1px] ${backgroundTransition} ${darkMode ? 'bg-neutral-600' : 'bg-neutral-300'}`}></div>
            </div>
            <button
                className={`px-4 py-2 ${buttonTransition} ${darkMode ? 'hover:bg-neutral-600' : 'hover:bg-neutral-300'}`}
            >
                다음 챕터→
            </button>
        </div>
    );
    
    return (
        <div className={`${getBgStyle(darkMode)} p-4 md:p-6 rounded-lg shadow-lg ${backgroundTransition}`}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 space-y-3 md:space-y-0">
                {/* 모바일 버전 - 수정된 부분 */}
                <div className="md:hidden">
                    <div className="flex justify-between items-center">
                        <button
                            onClick={() => handleNavigation(`/${storyType}`)}
                            className={getBackButtonStyle()}
                            aria-label="돌아가기"
                        >
                            <Undo2 />
                        </button>
                        {/*<StoryNavigationButtons />*/}
                    </div>
                    <h2 className={`text-xl font-bold mt-3 text-center ${getTextStyle(darkMode)}`}>{selectedStory.title}</h2>
                </div>
                
                {/* 데스크탑 버전 - 기존 그대로 유지 */}
                <div className="hidden md:flex md:flex-row md:items-center space-y-2 md:space-y-0">
                    <button
                        onClick={() => handleNavigation(`/${storyType}`)}
                        className={`${getBackButtonStyle()} w-auto`}
                        aria-label="돌아가기"
                    >
                        <Undo2 />
                    </button>
                    <h2 className={`ml-4 text-2xl font-bold ${getTextStyle(darkMode)}`}>{selectedStory.title}</h2>
                </div>
                
                {/* 데스크탑에서만 표시 */}
                <div className="hidden md:block">
                    {/*<StoryNavigationButtons />*/}
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
                        className={getChapterItemStyle()}
                    >
                        <h3 className={`text-base md:text-lg font-semibold break-words ${getTextStyle(darkMode)}`}>
                            {index + 1}{"."} {chapter.title} {chapter.subtitle &&
                                <span className={`${getSubTextStyle(darkMode)} text-sm md:text-base ml-1 md:ml-2 block md:inline mt-1 md:mt-0`}
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