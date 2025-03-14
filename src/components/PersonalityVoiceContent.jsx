import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Undo2, Play, Pause } from 'lucide-react';
import LoadPersonalityVoice from '../utill/LoadPersonalityVoice';
import personalityData from '../data/personalityData';
import { motion } from "framer-motion";

const PersonalityVoiceContent = ({ darkMode }) => {
  const { personalityId, storyId } = useParams();
  const navigate = useNavigate();
  const [voiceData, setVoiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [playingId, setPlayingId] = useState(null);
  const [titleText, setTitleText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // LoadPersonalityVoice 함수를 사용하여 인격 대사집 데이터 로드
        const data = await LoadPersonalityVoice(personalityId, storyId);
        setVoiceData(data);
        
        // personalityData에서 title 찾기
        if (personalityData[personalityId]) {
          const characterData = personalityData[personalityId].find(item => item.id === storyId);
          if (characterData && characterData.title) {
            setTitleText(characterData.title);
          } else {
            setTitleText(data.title || storyId);
          }
        } else {
          setTitleText(data.title || storyId);
        }
      } catch (error) {
        console.error('대사집 데이터 로딩 오류:', error);
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

  const handlePlayAudio = (id) => {
    // 현재 재생 중인 오디오가 있으면 중지
    if (playingId === id) {
      // 오디오 중지 로직 (나중에 구현)
      setPlayingId(null);
    } else {
      // 오디오 재생 로직 (나중에 구현)
      setPlayingId(id);
    }
  };

  if (loading) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'} p-6`}>
        <p>로딩 중...</p>
      </div>
    );
  }

  return (
    <div className={`${darkMode ? 'bg-neutral-800 text-neutral-200' : 'bg-white text-neutral-800'} p-3 md:p-6 rounded-lg shadow-lg`}>
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-10">
        <button
          onClick={handleGoBack}
          className={`px-4 py-2 rounded-md ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
            }`}
        >
          <Undo2 />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-center flex-1">{titleText} 대사</h1>
        <div className="w-[48px]"></div> {/* 헤더 균형을 위한 빈 공간 */}
      </div>

      {/* 대사집 내용 */}
      <div className="space-y-4 md:space-y-6 font-NotoSerifKR md:px-4">
        {voiceData?.quotes?.map((quote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`mb-3 px-2 py-2 md:py-0 rounded-lg ${darkMode
                ? 'bg-neutral-700 md:bg-transparent'
                : 'bg-neutral-200 md:bg-transparent'
              }`}
          >
            {/* 대사 설명 - 배경색 제거 */}
            <div className={`mb-2 px-3 py-2 font-medium ${darkMode
                ? 'text-neutral-300 md:text-neutral-400 border-b border-neutral-500 md:border-neutral-700'
                : 'text-neutral-800 md:text-neutral-700 border-b border-neutral-400 md:border-neutral-300'
              }`}>
              {quote.situation}
            </div>

            {/* 대사 컨테이너 - 배경색 제거, 패딩 유지 */}
            <div className="rounded-lg overflow-hidden p-3">
              {/* 대사 내용 */}
              <div className="flex flex-row space-x-3">
                {/* 재생 버튼 */}
                <div className="w-8 md:w-10 flex-shrink-0 self-start">
                  <button
                    onClick={() => handlePlayAudio(quote.id)}
                    className={`p-2 rounded-full ${darkMode
                        ? 'bg-neutral-600 hover:bg-neutral-500'
                        : 'bg-neutral-300 hover:bg-neutral-400 md:bg-neutral-200 md:hover:bg-neutral-300'
                      } `}
                  >
                    {playingId === quote.id ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                </div>

                {/* 대사 텍스트 */}
                <div className="flex-1 flex items-center">
                  <p className={`whitespace-pre-wrap text-base leading-relaxed
                  ${darkMode ? 'text-neutral-100 md:text-neutral-200' : 'text-neutral-800'
                    }`}>
                    {quote.text}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 하단 네비게이션 */}
      <div className="flex justify-start items-center mt-6">
        <button
          onClick={handleGoBack}
          className={`px-4 py-2 rounded-md ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
            }`}
        >
          <Undo2 />
        </button>
      </div>
    </div>
  );
};

export default PersonalityVoiceContent;