// components/ChapterList.jsx
import { motion } from 'framer-motion';

const ChapterList = ({ selectedStory, darkMode, handleChapterClick, handleNavigation, storyType }) => {
    return (
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
                        transition={{ delay: index * 0.01 }}
                        onClick={() => handleChapterClick(chapter.id)}
                        className={`${
                            darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-100 hover:bg-neutral-200'
                        } p-4 rounded-lg cursor-pointer transition-colors duration-200`}
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