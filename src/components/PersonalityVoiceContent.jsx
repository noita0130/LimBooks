import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Undo2, Play, Pause } from 'lucide-react';
import loadPersonalityVoiceData from '../utill/loadPersonalityVoiceData';
import { motion } from "framer-motion";

const PersonalityVoiceContent = ({ darkMode }) => {
  const { personalityId, storyId } = useParams();
  const navigate = useNavigate();
  const [voiceData, setVoiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [playingId, setPlayingId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // 인격 대사집 데이터 로드
        const data = await loadPersonalityVoiceData(personalityId, storyId);
        setVoiceData(data);
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
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handleGoBack}
          className={`px-4 py-2 rounded-md ${
            darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
          }`}
        >
          <Undo2 />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-center flex-1">{voiceData?.title || ''} 대사집</h1>
        <div className="w-[48px]"></div> {/* 헤더 균형을 위한 빈 공간 */}
      </div>

      {/* 대사집 내용 */}
      <div className="space-y-6 font-NotoSerifKR">
        {voiceData?.quotes?.map((quote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="mb-3"
          >
            {/* 대사 설명 */}
            <div className={`mb-2 px-2 py-1 ${
              darkMode ? 'text-neutral-400 border-b border-neutral-700' : 'text-neutral-700 border-b border-neutral-300'
            }`}>
              {quote.situation}
            </div>
            
            {/* 대사 컨테이너 - 모바일에서만 배경색 적용 */}
            <div className={`md:bg-transparent rounded-lg p-2 ${
              darkMode ? 'bg-neutral-700 md:bg-transparent' : 'bg-neutral-200 md:bg-transparent'
            }`}>
              {/* 대사 내용 */}
              <div className="flex flex-row items-start space-x-3">
                {/* 재생 버튼 */}
                <div className="w-8 md:w-10 flex-shrink-0">
                  <button
                    onClick={() => handlePlayAudio(quote.id)}
                    className={`p-2 rounded-full ${
                      darkMode 
                        ? 'bg-neutral-600 hover:bg-neutral-500' 
                        : 'bg-neutral-200 hover:bg-neutral-300'
                    } transition-colors`}
                  >
                    {playingId === quote.id ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                </div>
                
                {/* 대사 텍스트 */}
                <div className={`flex-1 py-1 ${
                  darkMode ? 'text-neutral-200' : 'text-neutral-800'
                }`}>
                  <p className="whitespace-pre-wrap">{quote.text}</p>
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

export default PersonalityVoiceContent;