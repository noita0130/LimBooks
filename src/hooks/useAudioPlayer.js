import { useState, useEffect, useRef } from 'react';

/**
 * 오디오 재생을 관리하는 커스텀 훅
 * @param {string} basePath - 오디오 파일 기본 경로
 * @param {Object} options - 추가 옵션
 * @returns {Object} - 오디오 재생 관련 상태 및 함수
 */
const useAudioPlayer = (basePath, options = {}) => {
  const [playingId, setPlayingId] = useState(null);
  const [loadingId, setLoadingId] = useState(null);
  const [volume, setVolume] = useState(() => {
    // 저장된 볼륨 설정 불러오기
    const savedVolume = localStorage.getItem('voicePlayerVolume');
    return savedVolume !== null ? parseFloat(savedVolume) : 0.7; // 기본 음량 70%
  });
  const audioRef = useRef(null);
  const audioCache = useRef({});

  // 컴포넌트 언마운트 시 오디오 정리
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      // 메모리 관리를 위해 캐시도 비움
      audioCache.current = {};
    };
  }, []);

  // 볼륨 변경시 현재 오디오와 캐시에 적용
  useEffect(() => {
    // 현재 재생 중인 오디오가 있으면 볼륨 적용
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
    
    // 모든 캐시된 오디오에 볼륨 적용
    Object.values(audioCache.current).forEach(audio => {
      audio.volume = volume;
    });
    
    // 볼륨 설정 로컬 스토리지에 저장
    localStorage.setItem('voicePlayerVolume', volume);
  }, [volume]);

  /**
   * 오디오 재생 함수
   * @param {string} id - 오디오 ID
   */
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
    const audioUrl = `${basePath}/${id}.wav`;
    
    // 캐시에서 오디오 확인
    if (audioCache.current[id]) {
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
  
  /**
   * 정지 버튼 핸들러
   */
  const handleStopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlayingId(null);
      audioRef.current = null;
    }
  };

  /**
   * 볼륨 조절 함수
   * @param {number} newVolume - 새 볼륨 값 (0.0~1.0)
   */
  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  return {
    playingId,
    loadingId,
    volume,
    handlePlayAudio,
    handleStopAudio,
    handleVolumeChange
  };
};

export default useAudioPlayer;