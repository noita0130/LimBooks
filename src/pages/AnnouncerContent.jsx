// components/AnnouncerContent.jsx (개선된 버전)
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Undo2 } from 'lucide-react';
import LoadAnnouncer from '../utill/LoadAnnouncer';
import announcerData from '../data/announcerData';
import { motion } from "framer-motion";
import { renderRichText } from '../utill/textUtills';
import useDarkMode from '../hooks/useDarkmode';
import useAudioPlayer from '../hooks/useAudioPlayer';
import VolumeControl from '../components/VolumeControl';
import AudioButton from '../components/AudioButton';
import { AUDIO_PATHS } from '../hooks/audioConfig';
import { 
  backgroundTransition, 
  buttonTransition,
  textTransition,
  getBgStyle, 
  getTextStyle, 
  getSubTextStyle 
} from '../components/TransitionStyles';

const AnnouncerContent = () => {
  const { darkMode } = useDarkMode();
  const { announcerId } = useParams();
  const navigate = useNavigate();
  const [voiceData, setVoiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [titleText, setTitleText] = useState('');

  // 오디오 플레이어 훅 사용
  const {
    playingId,
    loadingId,
    volume,
    handlePlayAudio,
    handleStopAudio,
    handleVolumeChange
  } = useAudioPlayer(AUDIO_PATHS.ANNOUNCER);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // 아나운서 데이터 찾기
        const announcer = announcerData.find(item => 
          item.id.replace('.json', '') === announcerId || 
          item.id === announcerId
        );

        if (!announcer) {
          throw new Error(`아나운서 데이터를 찾을 수 없습니다: ${announcerId}`);
        }

        // 실제 ID(.json 포함)를 사용하여 데이터 로드
        const data = await LoadAnnouncer(announcer.id);
        setVoiceData(data);
        setTitleText(announcer.name || data.title || announcerId);
      } catch (error) {
        console.error('아나운서 데이터 로딩 오류:', error);
      } finally {
        setLoading(false);
      }
    };

    if (announcerId) {
      fetchData();
      window.scrollTo(0, 0);
    }
  }, [announcerId]);

  const handleGoBack = () => {
    navigate(`/announcers`);
  };
  
  // 버튼 스타일
  const getBackButtonStyle = () => `px-4 py-2 w-14 h-10 rounded-md ${buttonTransition}
    ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'}`;
  
  // 대사집 아이템 스타일
  const getQuoteItemStyle = () => `mb-3 px-2 py-2 md:py-0 rounded-lg ${backgroundTransition} ${
    darkMode ? 'bg-neutral-700 md:bg-transparent' : 'bg-neutral-200 md:bg-transparent'
  }`;
  
  // 대사 설명 스타일
  const getQuoteDescStyle = () => `mb-2 px-3 py-2 font-medium text-sm md:text-base ${textTransition}
    ${darkMode
      ? 'text-neutral-300 md:text-neutral-400 border-b border-neutral-500 md:border-neutral-700'
      : 'text-neutral-800 md:text-neutral-700 border-b border-neutral-400 md:border-neutral-300'
  }`;
  
  // 대사 텍스트 스타일
  const getQuoteTextStyle = () => `whitespace-pre-wrap text-sm md:text-base leading-relaxed ${textTransition}
    ${darkMode ? 'text-neutral-100 md:text-neutral-200' : 'text-neutral-800'}`;

  if (loading) {
    return (
      <div className={`min-h-screen ${backgroundTransition} ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'} p-6`}>
        <p>로딩 중...</p>
      </div>
    );
  }

  return (
    <div className={`${getBgStyle(darkMode)} p-3 md:p-6 rounded-lg shadow-lg ${backgroundTransition}`}>
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-10">
        <button
          onClick={handleGoBack}
          className={getBackButtonStyle()}
          aria-label="돌아가기"
        >
          <Undo2 />
        </button>
        <h1 className={`text-base md:text-2xl font-bold text-center flex-1 ${getTextStyle(darkMode)}`}>
          {titleText}
        </h1>
        
        {/* 볼륨 컨트롤 */}
        <VolumeControl 
          volume={volume} 
          onVolumeChange={handleVolumeChange} 
          darkMode={darkMode} 
        />
      </div>

      {/* 대사집 내용 */}
      <div className="space-y-4 md:space-y-6 font-NotoSerifKR md:px-4">
        {voiceData?.quotes?.map((quote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.02 }}
            className={getQuoteItemStyle()}
          >
            {/* 대사 설명 - 배경색 제거 */}
            <div className={getQuoteDescStyle()}>
              {renderRichText(quote.situation, 'situation')}
            </div>

            {/* 대사 컨테이너 */}
            <div className="rounded-lg overflow-hidden p-3">
              {/* 대사 내용 */}
              <div className="flex flex-row space-x-3">
                {/* 재생 버튼 */}
                <div className="w-8 md:w-10 flex-shrink-0 self-start">
                  <AudioButton
                    id={quote.id}
                    playingId={playingId}
                    loadingId={loadingId}
                    onPlay={handlePlayAudio}
                    onStop={handleStopAudio}
                    darkMode={darkMode}
                  />
                </div>

                {/* 대사 텍스트 */}
                <div className="flex-1 flex items-center">
                  <p className={getQuoteTextStyle()}>
                    {renderRichText(quote.text, 'text')}
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
          className={`px-4 py-2 rounded-md ${buttonTransition} ${
            darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
          }`}
          aria-label="돌아가기"
        >
          <Undo2 />
        </button>
      </div>
    </div>
  );
};

export default AnnouncerContent;