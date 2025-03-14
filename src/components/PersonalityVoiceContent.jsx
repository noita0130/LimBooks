import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Undo2, Play, Square, Loader, Volume2 } from 'lucide-react';
import LoadPersonalityVoice from '../utill/LoadPersonalityVoice';
import personalityData from '../data/personalityData';
import { motion } from "framer-motion";
import { renderRichText } from '../utill/textUtills';

const PersonalityVoiceContent = ({ darkMode }) => {
  const { personalityId, storyId } = useParams();
  const navigate = useNavigate();
  const [voiceData, setVoiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [playingId, setPlayingId] = useState(null);
  const [loadingId, setLoadingId] = useState(null);
  const [titleText, setTitleText] = useState('');
  const [volume, setVolume] = useState(0.7); // 기본 음량 70%
  const [isVolumeVisible, setIsVolumeVisible] = useState(false);
  const audioRef = useRef(null);
  const audioCache = useRef({});

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

    // 저장된 볼륨 설정 불러오기 - 공유 볼륨 키 사용
    const savedVolume = localStorage.getItem('voicePlayerVolume');
    if (savedVolume !== null) {
      setVolume(parseFloat(savedVolume));
    }

    // 컴포넌트 언마운트 시 오디오 정리
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      // 메모리 관리를 위해 캐시도 비움
      audioCache.current = {};
    };
  }, [personalityId, storyId]);

  const handleGoBack = () => {
    navigate(`/personality/${personalityId}`);
  };

  // 볼륨 조절 함수
  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    
    // 현재 재생 중인 오디오가 있으면 볼륨 적용
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    
    // 모든 캐시된 오디오에 볼륨 적용
    Object.values(audioCache.current).forEach(audio => {
      audio.volume = newVolume;
    });
    
    // 볼륨 설정 로컬 스토리지에 저장 - 공유 볼륨 키 사용
    localStorage.setItem('voicePlayerVolume', newVolume);
  };
  
  // 볼륨 슬라이더 토글
  const toggleVolumeSlider = () => {
    setIsVolumeVisible(prev => !prev);
  };

  const handlePlayAudio = (id) => {
    // 현재 재생 중인 오디오가 있으면 중지
    if (audioRef.current) {
      audioRef.current.pause();
      if (playingId === id) {
        setPlayingId(null);
        audioRef.current = null;
        return;
      }
    }

    // 로딩 상태 설정
    setLoadingId(id);
    
    // 오디오 URL - id를 기반으로 URL 구성
    const audioUrl = `https://cdn.jsdelivr.net/gh/noita0130/LimbusVoice@master/personalityVoice/${id}.wav`;
    
    //console.log('재생 시도:', audioUrl);
    
    // 캐시에서 오디오 확인
    if (audioCache.current[id]) {
      //console.log('캐시된 오디오 사용:', id);
      const cachedAudio = audioCache.current[id];
      
      // 오디오 위치 초기화 및 재생
      cachedAudio.currentTime = 0;
      audioRef.current = cachedAudio;
      
      // 볼륨 설정
      cachedAudio.volume = volume;
      
      cachedAudio.play()
        .then(() => {
          setPlayingId(id);
          setLoadingId(null);
        })
        .catch(error => {
          console.error('캐시된 오디오 재생 실패:', error);
          setPlayingId(null);
          setLoadingId(null);
          audioRef.current = null;
        });
      
      return;
    }
    
    // 새 오디오 객체 생성
    const audio = new Audio(audioUrl);
    audioRef.current = audio;
    
    // 볼륨 설정
    audio.volume = volume;
    
    // 오디오 이벤트 리스너 설정
    audio.addEventListener('ended', () => {
      setPlayingId(null);
      audioRef.current = null;
    });
    
    audio.addEventListener('error', (e) => {
      console.error('오디오 재생 오류:', e);
      setPlayingId(null);
      setLoadingId(null);
      audioRef.current = null;
    });
    
    // 오디오 재생 시작
    audio.play()
      .then(() => {
        setPlayingId(id);
        setLoadingId(null);
        // 성공적으로 재생되면 캐시에 저장
        audioCache.current[id] = audio;
      })
      .catch(error => {
        console.error('오디오 재생 실패:', error);
        setPlayingId(null);
        setLoadingId(null);
        audioRef.current = null;
      });
  };
  
  // 정지 버튼 핸들러
  const handleStopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlayingId(null);
      audioRef.current = null;
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
          className={`px-4 py-2 w-14 h-10 rounded-md
            ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
            }`}
        >
          <Undo2 />
        </button>
        <h1 className="text-base md:text-2xl font-bold text-center flex-1">{titleText} 대사</h1>
        <div className="relative">
          <button
            onClick={toggleVolumeSlider}
            className={`px-4 py-2 w-14 h-10 rounded-md
              ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
              }`}
          >
            <Volume2 />
          </button>
          
          {/* 볼륨 슬라이더 */}
          {isVolumeVisible && (
            <div 
              className={`absolute right-0 mt-2 p-4 rounded-lg shadow-lg z-10 ${
                darkMode ? 'bg-neutral-700' : 'bg-white'
              }`}
              style={{ width: '200px' }}
            >
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">볼륨: {Math.round(volume * 100)}%</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 대사집 내용 */}
      <div className="space-y-4 md:space-y-6 font-NotoSerifKR md:px-4">
        {voiceData?.quotes?.map((quote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.02 }}
            className={`mb-3 px-2 py-2 md:py-0 rounded-lg ${darkMode
                ? 'bg-neutral-700 md:bg-transparent'
                : 'bg-neutral-200 md:bg-transparent'
              }`}
          >
            {/* 대사 설명 - 배경색 제거 */}
            <div className={`mb-2 px-3 py-2 font-medium text-sm md:text-base
            ${darkMode
                ? 'text-neutral-300 md:text-neutral-400 border-b border-neutral-500 md:border-neutral-700'
                : 'text-neutral-800 md:text-neutral-700 border-b border-neutral-400 md:border-neutral-300'
              }`}>
              {renderRichText(quote.situation, 'situation')}
            </div>

            {/* 대사 컨테이너 - 배경색 제거, 패딩 유지 */}
            <div className="rounded-lg overflow-hidden p-3">
              {/* 대사 내용 */}
              <div className="flex flex-row space-x-3">
                {/* 재생 버튼 */}
                <div className="w-8 md:w-10 flex-shrink-0 self-start">
                  <button
                    onClick={() => playingId === quote.id ? handleStopAudio() : handlePlayAudio(quote.id)}
                    className={`p-2 rounded-full
                      ${darkMode
                        ? 'bg-neutral-600 hover:bg-neutral-500'
                        : 'bg-neutral-300 hover:bg-neutral-400 md:bg-neutral-200 md:hover:bg-neutral-300'
                      } `}
                    disabled={loadingId === quote.id}
                  >
                    {loadingId === quote.id ? (
                      <Loader size={16} className="animate-spin" />
                    ) : playingId === quote.id ? (
                      <Square size={16} />
                    ) : (
                      <Play size={16} />
                    )}
                  </button>
                </div>

                {/* 대사 텍스트 */}
                <div className="flex-1 flex items-center ">
                  <p className={`whitespace-pre-wrap leading-relaxed text-sm md:text-base 
                  ${darkMode ? 'text-neutral-100 md:text-neutral-200' : 'text-neutral-800'
                    }`}>
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