import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Undo2 } from 'lucide-react';
import StoryDialog from '../components/StoryDialog';
import LoadPersonalityStory from '../utill/LoadPersonalityStory';
import personalityData from '../data/personalityData';
import { motion } from "framer-motion";

const PersonalityStoryContent = ({ darkMode }) => {
  const { personalityId, storyId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const scrollRef = useRef(new Map());
  const [storyData, setStoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [titleText, setTitleText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // LoadPersonalityStory 함수를 사용하여 인격 스토리 데이터 로드
        const data = await LoadPersonalityStory(personalityId, storyId);
        setStoryData(data);
        
        // personalityData에서 title 찾기
        if (personalityData[personalityId]) {
          const characterData = personalityData[personalityId].find(item => item.id === storyId);
          if (characterData && characterData.title) {
            setTitleText(characterData.title);
          } else {
            setTitleText(data.title || '인격 스토리');
          }
        } else {
          setTitleText(data.title || '인격 스토리');
        }
      } catch (error) {
        console.error('스토리 데이터 로딩 오류:', error);
      } finally {
        setLoading(false);
      }
    };

    if (personalityId && storyId) {
      fetchData();
      window.scrollTo(0, 0);
    }
  }, [personalityId, storyId]);

  const handleGoBack = () => {
    navigate(`/personality/${personalityId}`);
  };

  if (loading) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'} p-6`}>
        <p>로딩 중...</p>
      </div>
    );
  }

  return (
    <div className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} p-3 md:p-6 rounded-lg shadow-lg`}>
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-10">
        <button
          onClick={handleGoBack}
          className={`px-4 py-2 rounded-md ${
            darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
          }`}
        >
          <Undo2 />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-center flex-1">{titleText}</h1>
        <div className="w-[48px]"></div> {/* 헤더 균형을 위한 빈 공간 */}
      </div>

      {/* 스토리 내용 */}
      {storyData?.dataList && (
        <StoryDialog
          dataList={storyData.dataList}
          darkMode={darkMode}
        />
      )}

      {/* 하단 네비게이션 */}
      <div className="flex justify-start items-center mt-6">
        <button
          onClick={handleGoBack}
          className={`px-4 py-2 rounded-md ${
            darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
          }`}
        >
          <Undo2 />
        </button>
      </div>
    </div>
  );
};

export default PersonalityStoryContent;