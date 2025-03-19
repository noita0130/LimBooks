import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Undo2, List } from 'lucide-react';
import StoryDialog from '../components/StoryDialog';
import LoadPersonalityStory from '../utill/LoadPersonalityStory';
import personalityData from '../data/personalityData';
import StorySelector from '../utill/StorySelector';
import useDarkMode from '../hooks/useDarkmode';
import {
  isSpecialStoryId,
  getSpecialStoryInfo,
  getSpecialStoryMainTitle,
  getSpecialStorySubTitle
} from '../data/specialStoriesMap';

const PersonalityStoryContent = () => {
  const { darkMode } = useDarkMode();
  const { personalityId, storyId } = useParams();
  const navigate = useNavigate();

  const [storyData, setStoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [titleText, setTitleText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [showStorySelector, setShowStorySelector] = useState(false);
  const [specialStoryInfo, setSpecialStoryInfo] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // 특별한 스토리 ID인지 확인
  useEffect(() => {
    if (storyId) {
      const isSpecial = isSpecialStoryId(storyId);
      if (isSpecial) {
        const storyInfo = getSpecialStoryInfo(storyId);
        setSpecialStoryInfo(storyInfo);
      } else {
        setSpecialStoryInfo(null);
      }
    }
  }, [storyId]);

  // 스토리 데이터 로드
  useEffect(() => {
    const fetchData = async () => {
      if (!personalityId || !storyId) return;

      // 이미 데이터 로딩 중이거나 네비게이션 중이면 리턴
      if (loading && isNavigating) return;

      setLoading(true);
      try {
        // 스토리 데이터 로드
        const data = await LoadPersonalityStory(personalityId, storyId);
        setStoryData(data);

        // 제목 설정
        let title = '';
        let subtitle = '';

        // 1. 특별한 스토리인 경우
        if (isSpecialStoryId(storyId)) {
          const mainTitle = getSpecialStoryMainTitle(storyId);
          const subTitle = getSpecialStorySubTitle(storyId);
          title = mainTitle || '';
          subtitle = subTitle || '';
        }

        // 2. personalityData에서 제목 찾기
        if (!title && personalityData[personalityId]) {
          const characterData = personalityData[personalityId].find(item => item.id === storyId);
          if (characterData?.title) {
            title = characterData.title;
          }
        }

        // 3. 스토리 데이터에서 제목 찾기
        if (!title && data.title) {
          title = data.title;
        }

        // 4. 기본값 설정
        if (!title) {
          title = '인격 스토리';
        }

        setTitleText(title);
        setSubtitleText(subtitle);
      } catch (error) {
        console.error('스토리 데이터 로딩 오류:', error);
      } finally {
        // 애니메이션이 끝난 후 transitioning 상태 해제
        setTimeout(() => {
          setLoading(false);
          setIsTransitioning(false);
          setIsNavigating(false);
        }, 400); // 페이드 애니메이션 시간과 맞춤
      }
    };

    // 라우트 변경 시 전환 상태 설정
    setIsTransitioning(true);

    // 네비게이팅 중이 아닐 때만 데이터 로드 (즉시 로드 방지)
    if (!isNavigating) {
      // 페이지 최상단으로 스크롤
      window.scrollTo(0, 0);
      fetchData();
    }
  }, [personalityId, storyId, isNavigating, loading]);

  const handleGoBack = () => {
    navigate(`/sinner/personality/${personalityId}`);
  };

  // 다른 스토리 선택 처리
  const handleSelectStory = (selectedStoryId) => {
    if (selectedStoryId !== storyId) {
      setShowStorySelector(false);
      setIsNavigating(true);
      // 약간의 지연 후 페이지 이동
      setTimeout(() => {
        navigate(`/sinner/personality/${personalityId}/story/${selectedStoryId}`);
      }, 50);
    } else {
      setShowStorySelector(false);
    }
  };

  const handleToggleStorySelector = () => {
    setShowStorySelector(prev => !prev);
  };

  // 제목 및 서브타이틀 컴포넌트
  const TitleSection = () => (
    <div className="text-center">
      <span className="font-semibold text-sm md:text-base">{titleText}</span>
      {subtitleText && (
        <span className={`ml-1 md:ml-2 text-xs md:text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
          {subtitleText}
        </span>
      )}
    </div>
  );

  // 모바일 헤더
  const MobileHeader = () => (
    <div className="flex flex-col space-y-3 mb-6 md:hidden">
      {/* 첫 번째 줄: 돌아가기 버튼과 스토리 선택기 버튼 */}
      <div className="flex justify-between items-center">
        <button
          onClick={handleGoBack}
          className={`px-4 py-2 rounded-md ${
            darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
          }`}
        >
          <Undo2 />
        </button>
        
        {specialStoryInfo ? (
          <button
            onClick={handleToggleStorySelector}
            className={`px-4 py-2 rounded-md ${
              darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
            }`}
          >
            <List />
          </button>
        ) : (
          <div className="w-[48px]"></div> // 헤더 균형을 위한 빈 공간
        )}
      </div>
      
      {/* 두 번째 줄: 제목 */}
      <div className="flex justify-center mt-2">
        <div className="text-center">
          <div className="font-semibold">{titleText}</div>
          {subtitleText && (
            <div className={`${darkMode ? 'text-neutral-400' : 'text-neutral-600'} text-xs`}>
              {subtitleText}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // 로딩 화면
  if (loading && !storyData) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'} p-6`}>
        <p>로딩 중...</p>
      </div>
    );
  }

  return (
    <div className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} p-3 md:p-6 rounded-lg shadow-lg`}>
      {/* 모바일 헤더 */}
      <MobileHeader />

      {/* 데스크탑 헤더 */}
      <div className="hidden md:flex justify-between items-center mb-10">
        <button
          onClick={handleGoBack}
          className={`px-4 py-2 rounded-md ${
            darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
          }`}
        >
          <Undo2 />
        </button>

        <div className="flex-1 text-center mx-2">
          <span className="font-semibold text-base">{titleText}</span>
          {subtitleText && (
            <span className={`ml-2 text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              {subtitleText}
            </span>
          )}
        </div>

        <div className="w-[48px] flex justify-end">
          {specialStoryInfo && (
            <button
              onClick={handleToggleStorySelector}
              className={`px-4 py-2 rounded-md ${
                darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
              }`}
            >
              <List />
            </button>
          )}
        </div>
      </div>

      {/* 스토리 내용 */}
      <div>
        {storyData?.dataList && (
          <StoryDialog
            dataList={storyData.dataList}
            darkMode={darkMode}
          />
        )}
      </div>

      {/* 하단 네비게이션 */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handleGoBack}
          className={`px-4 py-2 rounded-md ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
            }`}
        >
          <Undo2 />
        </button>

        {/* 특별한 스토리인 경우 선택기 버튼 추가 */}
        {specialStoryInfo && (
          <button
            onClick={handleToggleStorySelector}
            className={`px-4 py-2 rounded-md ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
              }`}
          >
            <List />
          </button>
        )}
      </div>

      {/* 스토리 선택 모달 */}
      {showStorySelector && specialStoryInfo && (
        <StorySelector
          stories={specialStoryInfo.stories}
          title={specialStoryInfo.title}
          onSelect={handleSelectStory}
          onClose={() => setShowStorySelector(false)}
          darkMode={darkMode}
          isModal={true}
          currentStoryId={storyId}
        />
      )}
    </div>
  );
};

export default PersonalityStoryContent;