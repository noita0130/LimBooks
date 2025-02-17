// components/StoryList.jsx
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

const StoryList = ({ stories, storyType, darkMode, handleStoryClick, loading }) => {
  if (loading) {
    return <LoadingSpinner />;
  }

  if (!stories || !stories[storyType]) {
    return <div>스토리를 불러올 수 없습니다.</div>;
  }

  return (
    <div className="space-y-6">
      {stories[storyType].map((story, index) => (
        <motion.div
          key={story.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.03 }}
          onClick={() => handleStoryClick(story)}
          className={`${darkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-white hover:bg-neutral-300'} 
            rounded-lg shadow-md p-4 flex items-center space-x-8 cursor-pointer
            hover:shadow-lg  transition-all duration-200 `}
        >

          <img
            src={story.image}
            alt={story.title}
            className={'w-56 h-20 object-cover rounded-lg'}
            style={{objectPosition: storyType==='main' ? 'center' : '65% center'}}
              
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
      ))}
    </div>
  );
};

export default StoryList;