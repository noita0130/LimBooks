import { useState } from 'react';
import { Volume2 } from 'lucide-react';

/**
 * 볼륨 제어 컴포넌트
 * @param {Object} props - 컴포넌트 속성
 * @param {number} props.volume - 현재 볼륨 값 (0.0~1.0)
 * @param {Function} props.onVolumeChange - 볼륨 변경 핸들러
 * @param {boolean} props.darkMode - 다크 모드 여부
 * @returns {JSX.Element} - 볼륨 제어 컴포넌트
 */
const VolumeControl = ({ volume, onVolumeChange, darkMode }) => {
  const [isVolumeVisible, setIsVolumeVisible] = useState(false);
  
  // 볼륨 슬라이더 토글
  const toggleVolumeSlider = () => {
    setIsVolumeVisible(prev => !prev);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleVolumeSlider}
        className={`px-4 py-2 w-14 h-10 rounded-md
          ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'}`}
      >
        <Volume2 />
      </button>
      
      {/* 볼륨 슬라이더 */}
      {isVolumeVisible && (
        <div 
          className={`absolute right-0 mt-2 p-4 rounded-lg shadow-lg z-10
            ${darkMode ? 'bg-neutral-700' : 'bg-white'}`}
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
              onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VolumeControl;