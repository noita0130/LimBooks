// components/StoryList.jsx
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import LoadingSpinner from '../utill/LoadingSpinner';
import useDarkMode from '../hooks/useDarkmode'; // 추가

const StoryList = ({ stories, storyType, handleStoryClick, loading }) => {
  const { darkMode } = useDarkMode();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!stories || !stories[storyType]) {
    return <div>스토리를 불러올 수 없습니다.</div>;
  }

  const StoryTypeDisplay = ({ storyType }) => {
    return storyType === 'main' ? '메인스토리' : storyType === 'mini' ? '미니스토리' : '';
  };

  return (
    <div className="space-y-4 md:space-y-6">
        <div className='py-2 text-2xl md:text-3xl font-semibold'>
          <StoryTypeDisplay storyType={storyType} />
        </div>
      {stories[storyType].map((story, index) => (
        <motion.div
          key={story.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.03 }}
          onClick={() => handleStoryClick(story)}
          className={`${darkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-white hover:bg-neutral-300'} 
            rounded-lg shadow-md p-3 cursor-pointer hover:shadow-lg`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
            <div className="w-full md:w-auto mb-3 md:mb-0">
              <img
                src={story.image}
                alt={story.title}
                className="w-full md:w-60 h-auto md:h-26 object-cover rounded-lg mx-auto md:mx-0"
                style={{
                  maxHeight: "160px",
                  objectPosition: storyType === 'main' ? 'center' : '65% center'
                }}
              />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-lg md:text-xl font-semibold mb-2 pr-2">{story.title}</h2>
                <ChevronRight className="w-5 h-5 text-neutral-400" />
              </div>
              <p className={`${darkMode ? 'text-neutral-400' : 'text-neutral-600'} text-sm md:text-base`}>
                총 {story.chapters.length}개의 챕터
              </p>
              {story.wordCount !== undefined && (
                <p className={`${darkMode ? 'text-neutral-400' : 'text-neutral-600'} text-sm md:text-base`}>
                  전체 글자 수: {story.wordCount}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StoryList;