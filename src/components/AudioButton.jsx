import { Play, Square, Loader } from 'lucide-react';

/**
 * 오디오 재생/중지 버튼 컴포넌트
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.id - 오디오 ID
 * @param {string|null} props.playingId - 현재 재생 중인 오디오 ID
 * @param {string|null} props.loadingId - 현재 로딩 중인 오디오 ID
 * @param {Function} props.onPlay - 재생 핸들러
 * @param {Function} props.onStop - 중지 핸들러
 * @param {boolean} props.darkMode - 다크 모드 여부
 * @param {string} props.className - 추가 클래스명
 * @returns {JSX.Element} - 오디오 버튼 컴포넌트
 */
const AudioButton = ({ 
  id, 
  playingId, 
  loadingId, 
  onPlay, 
  onStop, 
  darkMode, 
  className = "" 
}) => {
  const isPlaying = playingId === id;
  const isLoading = loadingId === id;
  
  const handleClick = (e) => {
    e.stopPropagation();
    isPlaying ? onStop() : onPlay(id);
  };
  
  // 기본 스타일에 추가 스타일 적용
  const buttonStyle = `p-2 rounded-full ${className} ${
    darkMode 
      ? 'bg-neutral-600 hover:bg-neutral-500' 
      : 'bg-neutral-300 hover:bg-neutral-400 md:bg-neutral-200 md:hover:bg-neutral-300'
  }`;
  
  return (
    <button
      onClick={handleClick}
      className={buttonStyle}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader size={16} className="animate-spin" />
      ) : isPlaying ? (
        <Square size={16} />
      ) : (
        <Play size={16} />
      )}
    </button>
  );
};

export default AudioButton;