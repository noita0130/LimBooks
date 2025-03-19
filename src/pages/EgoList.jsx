// components/EgoList.jsx (개선된 버전)
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { ArrowUp, ArrowDown, ChevronDown, ChevronUp, Undo2 } from "lucide-react";
import handleGoBack from '../utill/handleGoBack';
import { isSpecialStoryId, getSpecialStoryInfo } from '../data/specialStoriesMap';
import StorySelector from '../utill/StorySelector';
import useDarkMode from '../hooks/useDarkmode';
import egoLoad from '../utill/EgoLoad';
import egoData from '../data/egoData';
import { motion, AnimatePresence } from 'framer-motion';
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

const EgoList = ({ personalityId }) => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const location = useLocation();
  const scrollRef = useRef(new Map());
  const [stories, setStories] = useState([]);
  const [characterInfo, setCharacterInfo] = useState(null);
  const [storyData, setStoryData] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [sortType, setSortType] = useState('idAsc');
  const [showStorySelector, setShowStorySelector] = useState(false);
  const [selectedSpecialStory, setSelectedSpecialStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // 화면 크기 감지를 위한 이벤트 리스너
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 오디오 플레이어 훅 사용
  const {
    playingId,
    loadingId,
    volume,
    handlePlayAudio,
    handleStopAudio,
    handleVolumeChange
  } = useAudioPlayer(AUDIO_PATHS.EGO);

  useEffect(() => {
    const loadEgoData = async () => {
      setLoading(true);
      try {
        // egoLoad 함수를 사용하여 EGO 데이터 로드
        const { egoList, personalityInfo } = egoLoad(personalityId);

        // 캐릭터 정보와 EGO 목록 설정
        setCharacterInfo(personalityInfo);
        setStories(egoList);
      } catch (error) {
        console.error("EGO 데이터 로드 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    loadEgoData();
  }, [personalityId]);

  // 정렬 함수
  const handleSort = (type) => {
    let newSortType;
    let sortedEgo = [...stories];

    // 현재 정렬 타입에 따라 다음 정렬 타입 결정
    if (type === 'id') {
      newSortType = sortType === 'idAsc' ? 'idDesc' : 'idAsc';
    } else if (type === 'name') {
      newSortType = sortType === 'nameAsc' ? 'nameDesc' : 'nameAsc';
    }

    // 새로운 정렬 타입에 따라 정렬
    switch (newSortType) {
      case 'nameAsc':
        sortedEgo.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
        break;
      case 'nameDesc':
        sortedEgo.sort((a, b) => b.name.localeCompare(a.name, 'ko'));
        break;
      case 'idAsc': // 출시순 (ID 문자열 비교)
        sortedEgo.sort((a, b) => {
          const numA = parseInt(a.id.replace('KR_', ''));
          const numB = parseInt(b.id.replace('KR_', ''));
          return numA - numB;
        });
        break;
      case 'idDesc': // 출시 역순 (ID 문자열 비교)
        sortedEgo.sort((a, b) => {
          const numA = parseInt(a.id.replace('KR_', ''));
          const numB = parseInt(b.id.replace('KR_', ''));
          return numB - numA;
        });
        break;
    }

    setStories(sortedEgo);
    setSortType(newSortType);
  };

  // 수정된 handleBack 함수
  const handleBack = () => {
    // navigate(-1) 대신 handleGoBack 함수 사용
    handleGoBack(navigate, location, scrollRef, null, null, {}, setStoryData, setSelectedStory);
  };

  // 특별 스토리 선택 핸들러
  const handleSpecialStorySelect = (selectedStoryId) => {
    navigate(`/sinner/${personalityId}/story/${selectedStoryId}`);
    setShowStorySelector(false);
  };

  // 스토리 항목 클릭 핸들러
  const handleItemClick = (storyId) => {
    // 특별한 스토리인지 확인
    if (isSpecialStoryId(storyId)) {
      // 특별한 스토리 정보 가져오기
      const specialStory = getSpecialStoryInfo(storyId);
      setSelectedSpecialStory(specialStory);
      setShowStorySelector(true);
    } else {
      // 일반적인 경우 - 확장/축소 토글
      setExpandedItemId(expandedItemId === storyId ? null : storyId);

      // 재생 중인 오디오가 있다면 중지
      handleStopAudio();
    }
  };
  
  // 스타일 함수
  const getBackButtonStyle = () => `px-4 py-2 rounded-md ${buttonTransition} inline-flex items-center w-fit
    ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'}`;
  
  const getSortButtonStyle = (isActive) => `px-3 py-2 rounded-md inline-flex items-center text-xs md:text-sm border-2 ${buttonTransition}
    ${darkMode ? "bg-neutral-700 hover:bg-neutral-600" : "bg-neutral-200 hover:bg-neutral-300"}
    ${isActive ? "" : "border-transparent"}`;
  
  const getCardStyle = () => `${backgroundTransition} ${
    darkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-white hover:bg-neutral-100'
  } rounded-lg shadow-md overflow-hidden transition-all duration-200 cursor-pointer`;
  
  const getExpandedContentStyle = () => `mt-1 rounded-lg shadow-md overflow-hidden p-0 ${backgroundTransition}
    ${darkMode ? 'bg-neutral-800' : 'bg-neutral-100'}`;
  
  const getDialogItemStyle = () => `p-3 rounded-md ${backgroundTransition} ${
    darkMode ? 'bg-neutral-700' : 'bg-white'
  }`;
  
  const getDialogTextStyle = () => `${textTransition} ${
    darkMode ? 'text-neutral-200' : 'text-neutral-800'
  }`;

  if (loading) {
    return (
      <div className={`min-h-screen ${backgroundTransition} ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'} p-6 flex items-center justify-center`}>
        <p>로딩 중...</p>
      </div>
    );
  }

  if (!characterInfo) {
    return (
      <div className={`min-h-screen ${backgroundTransition} ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'} p-6`}>
        <p>해당 인격체 정보를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen rounded-lg p-2 md:p-6 max-w-screen-2xl mx-auto ${backgroundTransition}
    ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'}`}>
      <div className="w-full mx-auto">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between mb-6">
          {/* 왼쪽 그룹 - 뒤로가기 버튼, 제목 및 볼륨 컨트롤 */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center">
              <button
                onClick={handleBack}
                className={getBackButtonStyle()}
                aria-label="돌아가기"
              >
                <Undo2 />
              </button>
              <h1 className={`text-lg sm:text-xl font-bold ml-3 ${getTextStyle(darkMode)}`}>{characterInfo.name}의 E.G.O 목록</h1>
            </div>
            
            {/* 모바일에서만 볼륨 컨트롤이 여기에 표시됨 - 오른쪽 정렬 */}
            {isMobile && (
              <div className="ml-auto">
                <VolumeControl 
                  volume={volume} 
                  onVolumeChange={handleVolumeChange} 
                  darkMode={darkMode} 
                />
              </div>
            )}
          </div>

          {/* 오른쪽 그룹 - PC에서만 볼륨 컨트롤이 여기에 표시됨 */}
          <div className="flex gap-2 items-center">
            <button
              onClick={() => handleSort('id')}
              className={getSortButtonStyle(sortType === 'idAsc' || sortType === 'idDesc')}
            >
              <span className="mr-1">출시순</span>
              {sortType === 'idAsc' ? (
                <ArrowDown className="w-3 h-3" />
              ) : sortType === 'idDesc' ? (
                <ArrowUp className="w-3 h-3" />
              ) : (
                <ArrowDown className="w-3 h-3" />
              )}
            </button>
            <button
              onClick={() => handleSort('name')}
              className={getSortButtonStyle(sortType === 'nameAsc' || sortType === 'nameDesc')}
            >
              <span className="mr-1">이름순</span>
              {sortType === 'nameAsc' ? (
                <ArrowDown className="w-3 h-3" />
              ) : sortType === 'nameDesc' ? (
                <ArrowUp className="w-3 h-3" />
              ) : (
                <ArrowDown className="w-3 h-3" />
              )}
            </button>

            {/* PC에서만 볼륨 컨트롤이 여기에 표시됨 */}
            {!isMobile && (
              <VolumeControl 
                volume={volume} 
                onVolumeChange={handleVolumeChange} 
                darkMode={darkMode} 
              />
            )}
          </div>
        </div>

        {/* 스토리 목록 컨텐츠 */}
        {stories.length === 0 ? (
          <div className={`p-6 rounded-lg ${backgroundTransition} ${darkMode ? 'bg-neutral-800' : 'bg-white'} shadow-md`}>
            <p className={getTextStyle(darkMode)}>이 수감자의 E.G.O 데이터가 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story, index) => {
              // egoData에서 현재 E.G.O에 대한 정보 찾기
              const egoInfoData = egoData[characterInfo.id]?.find(ego => ego.id === story.id);

              return (
                <div key={index} className="flex flex-col">
                  {/* 클릭 가능한 E.G.O 카드 */}
                  <button
                    onClick={() => handleItemClick(story.id)}
                    className={getCardStyle()}
                  >
                    <div className="flex h-full">
                      {/* 이미지 컨테이너 - 고정 비율 설정 */}
                      <div className="w-1/3 overflow-hidden">
                        <img
                          src={story.image}
                          alt={story.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="w-3/4 md:w-4/5 p-3 md:p-6 flex flex-col justify-between text-left">
                        <div>
                          <h2 className={`text-sm md:text-lg lg:text-xl font-semibold ${getTextStyle(darkMode)}`}>{story.name}</h2>
                        </div>

                        <div className="flex items-center justify-end mt-2 md:mt-4">
                          {expandedItemId === story.id ?
                            <ChevronUp className={`w-4 h-4 md:w-5 md:h-5 ${getSubTextStyle(darkMode)}`} /> :
                            <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 ${getSubTextStyle(darkMode)}`} />
                          }
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* 확장된 콘텐츠 - E.G.O 대사 및 정보 */}
                  <AnimatePresence mode="wait">
                    {expandedItemId === story.id && egoInfoData && egoInfoData.info && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={getExpandedContentStyle()}
                        layoutId={`content-${story.id}`}
                      >
                        <motion.div
                          className="p-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <h3 className={`font-semibold mb-3 text-sm md:text-base ${getTextStyle(darkMode)}`}>E.G.O 대사</h3>
                          <div className="space-y-3">
                            {egoInfoData.info.map((info, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.2,
                                  delay: idx * 0.05,
                                  ease: "easeOut"
                                }}
                                className={getDialogItemStyle()}
                              >
                                <div className={`text-xs md:text-sm ${getSubTextStyle(darkMode)} mb-2`}>{info.desc}</div>
                                <div className="flex items-center">
                                  {/* 재생 버튼 */}
                                  <AudioButton
                                    id={info.id}
                                    playingId={playingId}
                                    loadingId={loadingId}
                                    onPlay={handlePlayAudio}
                                    onStop={handleStopAudio}
                                    darkMode={darkMode}
                                    className="mr-3 flex-shrink-0"
                                  />

                                  {/* 대사 내용 */}
                                  <p className={`flex-grow text-xs sm:text-sm md:text-base ${getDialogTextStyle()}`}>{info.dlg}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 특별 스토리 선택 모달 */}
      {showStorySelector && selectedSpecialStory && (
        <StorySelector
          stories={selectedSpecialStory.stories}
          title={selectedSpecialStory.title}
          onSelect={handleSpecialStorySelect}
          onClose={() => setShowStorySelector(false)}
          darkMode={darkMode}
          isModal={true} // 모달 형태로 처리
        />
      )}
    </div>
  );
};

export default EgoList;