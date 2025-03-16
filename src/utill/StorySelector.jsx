import { X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';

/**
 * 여러 스토리 중에서 선택할 수 있는 모달 컴포넌트
 * @param {Object} props - 컴포넌트 속성
 * @param {Array} props.stories - 스토리 목록
 * @param {string} props.title - 모달 제목
 * @param {Function} props.onSelect - 스토리 선택 시 콜백 함수
 * @param {Function} props.onClose - 모달 닫기 시 콜백 함수
 * @param {boolean} props.darkMode - 다크 모드 여부
 * @param {boolean} props.isModal - 모달 형태로 사용할지 여부 (기본값: false)
 */
const StorySelector = ({ stories, title, onSelect, onClose, darkMode, isModal = false }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!stories || stories.length === 0) {
    return null;
  }

  // 모달일 경우 ESC 키로 닫기
  useEffect(() => {
    if (isModal) {
      const handleEscKey = (e) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };

      document.addEventListener('keydown', handleEscKey);
      return () => {
        document.removeEventListener('keydown', handleEscKey);
      };
    }
  }, [isModal]);

  useEffect(() => {
    if (isModal) {
      // 현재 스크롤 위치 저장
      const scrollY = window.scrollY;
      
      // 스크롤바는 유지하면서 스크롤 동작만 막기
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll'; // 스크롤바 유지
      
      // 모달이 닫힐 때 원래 상태로 복원
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isModal]);

  const handleClose = () => {
    setIsVisible(false);
    // 애니메이션 시간(0.2초) 후에 부모의 onClose 호출
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const containerClass = isModal
    ? "fixed inset-0 flex items-center justify-center z-50"
    : "relative w-full";

  return (
    <div className={containerClass}>
      {/* 배경 오버레이 (모달일 경우에만) - 투명도 수정 */}
      {isModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black"
          style={{ zIndex: 40 }}
          onClick={handleClose}
        />
      )}

      {/* 모달 컨텐츠 */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className={`relative max-w-md w-full mx-4 p-6 rounded-lg shadow-lg ${
              darkMode ? 'bg-neutral-800 text-white' : 'bg-white text-black'
            }`}
            style={{ zIndex: 50 }}
            onClick={(e) => e.stopPropagation()} // 이벤트 버블링 방지
          >
            {/* 모달 헤더 */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{title || '스토리 선택'}</h2>
              <button 
                onClick={handleClose}
                className={`p-2 rounded-full ${
                  darkMode ? 'hover:bg-neutral-700' : 'hover:bg-neutral-200'
                }`}
              >
                <X size={20} />
              </button>
            </div>

            {/* 스토리 목록 */}
            <div className={`space-y-3 max-h-[60vh] overflow-y-auto ${
              darkMode ? 'scrollbar-dark' : 'scrollbar-light'
            }`}>
              {stories.map((story, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsVisible(false);
                    setTimeout(() => onSelect(story.id), 200);
                  }}
                  className={`w-full text-left p-4 rounded-md transition-colors ${
                    darkMode 
                      ? 'bg-neutral-700 hover:bg-neutral-600' 
                      : 'bg-neutral-100 hover:bg-neutral-200'
                  }`}
                >
                  <p className="font-medium">{story.title}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StorySelector;