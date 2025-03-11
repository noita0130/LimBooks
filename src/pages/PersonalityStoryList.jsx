import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, BookOpen, ArrowUp, ArrowDown } from "lucide-react";
import personalityData from '../data/personalityData';
import personalityList from '../data/personalityList';
import handleGoBack from '../utill/handleGoBack';
import { Undo2 } from 'lucide-react';


const PersonalityStoryList = ({ darkMode, personalityId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollRef = useRef(new Map());
  const [stories, setStories] = useState([]);
  const [characterInfo, setCharacterInfo] = useState(null);
  const [storyData, setStoryData] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [sortType, setSortType] = useState('idAsc'); // 기본 정렬은 출시순(idAsc)으로 설정

  useEffect(() => {
    // 캐릭터 정보 가져오기
    const character = personalityList.find(char => char.id === personalityId);
    if (character) {
      setCharacterInfo(character);
    }

    // 해당 인격의 스토리 목록 가져오기
    const personalityStories = personalityData[personalityId] || [];

    // 기본 출시순으로 정렬 (a-b 음수반환 > a가 b보다 앞으로)
    const sortedStories = [...personalityStories].sort((a, b) => {
      const numA = parseInt(a.id.replace('KR_P', ''));
      const numB = parseInt(b.id.replace('KR_P', ''));
      return numA - numB;
    });

    setStories(sortedStories);
  }, [personalityId]);

  // 정렬 함수 추가 - 토글 방식으로 변경
  const handleSort = (type) => {
    let newSortType;
    let sortedStories = [...stories];

    // 현재 정렬 타입에 따라 다음 정렬 타입 결정
    if (type === 'id') {
      newSortType = sortType === 'idAsc' ? 'idDesc' : 'idAsc';
    } else if (type === 'name') {
      newSortType = sortType === 'nameAsc' ? 'nameDesc' : 'nameAsc';
    }

    // 새로운 정렬 타입에 따라 정렬
    switch (newSortType) {
      case 'nameAsc':
        sortedStories.sort((a, b) => a.title.localeCompare(b.title, 'ko'));
        break;
      case 'nameDesc':
        sortedStories.sort((a, b) => b.title.localeCompare(a.title, 'ko'));
        break;
      case 'idAsc': // 출시순 (ID 문자열 비교)
        sortedStories.sort((a, b) => {
          // ID가 "KR_P숫자" 형식이므로 숫자 부분을 추출하여 정렬
          const numA = parseInt(a.id.replace('KR_P', ''));
          const numB = parseInt(b.id.replace('KR_P', ''));
          return numA - numB;
        });
        break;
      case 'idDesc': // 출시 역순 (ID 문자열 비교)
        sortedStories.sort((a, b) => {
          // ID가 "KR_P숫자" 형식이므로 숫자 부분을 추출하여 정렬
          const numA = parseInt(a.id.replace('KR_P', ''));
          const numB = parseInt(b.id.replace('KR_P', ''));
          return numB - numA;
        });
        break;
    }

    setStories(sortedStories);
    setSortType(newSortType);
  };

  // 수정된 handleBack 함수
  const handleBack = () => {
    // navigate(-1) 대신 handleGoBack 함수 사용
    handleGoBack(navigate, location, scrollRef, null, null, {}, setStoryData, setSelectedStory);
  };

  const handleStoryClick = (storyId) => {
    // 스토리 상세 페이지로 이동 - /personality/:personalityId/story/:storyId 경로 사용
    navigate(`/personality/${personalityId}/story/${storyId}`);
  };

  const handleQuotesClick = (storyId) => {
    // 대사집 페이지로 이동 - /personality/:personalityId/voice/:storyId 경로 사용
    navigate(`/personality/${personalityId}/voice/${storyId}`);
  };

  // 특정 상황에서 Book 버튼 비활성화 여부 확인 함수
  const isBookButtonDisabled = (story, index) => {
    return index === 0 || story.title === "LCB 수감자";
  };

  if (!characterInfo) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'} p-6`}>
        <p>로딩 중...</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen rounded-lg p-2 md:p-6
    ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'} `}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between mb-6">
          {/* 왼쪽 그룹 */}
          <div className="flex items-center">
            <button
              onClick={handleBack}
              className={`px-4 py-2 rounded-md inline-flex items-center w-fit
          ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'}`}
            >
              <Undo2 />
            </button>
            <h1 className="text-xl font-bold ml-3">{characterInfo.name}의 인격 목록</h1>
          </div>

          {/* 오른쪽 그룹*/}
          <div className="flex gap-2">
            <button
              onClick={() => handleSort('id')}
              className={`px-3 py-2 rounded-md inline-flex items-center text-xs md:text-sm border-2
          ${darkMode ? "bg-neutral-700 hover:bg-neutral-600" : "bg-neutral-200 hover:bg-neutral-300"}
          ${sortType === 'idAsc' || sortType === 'idDesc' ? "" : "border-transparent"}`}
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
              className={`px-3 py-2 rounded-md inline-flex items-center text-xs md:text-sm border-2
          ${darkMode ? "bg-neutral-700 hover:bg-neutral-600" : "bg-neutral-200 hover:bg-neutral-300"}
          ${sortType === 'nameAsc' || sortType === 'nameDesc' ? "" : "border-transparent"}`}
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
          </div>
        </div>

        {/* 스토리 목록 컨텐츠 */}
        {stories.length === 0 ? (
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-neutral-800' : 'bg-white'} shadow-md`}>
            <p>이 캐릭터의 인격 데이터가 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden h-full`}
              >
                <div className="flex h-full">
                  <div className="w-1/3 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-4 md:p-6 flex flex-col h-full">
                    <div className="flex flex-col h-1/2">
                      <h2 className="text-sm md:text-base lg:text-xl font-semibold">{story.title}</h2>
                    </div>
                    <div className="flex flex-col h-1/2 justify-end">
                      <div className="flex w-full">
                        <button
                          onClick={() => handleStoryClick(story.id)}
                          disabled={isBookButtonDisabled(story, index)}
                          className={`flex-1 mr-2 px-2 py-2 md:py-3 rounded-md flex items-center justify-center
                          ${isBookButtonDisabled(story, index)
                              ? 'bg-neutral-400 text-neutral-600 opacity-50'
                              : darkMode
                                ? 'bg-neutral-700 hover:bg-neutral-600 text-white'
                                : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-900'} `
                          }
                        >
                          <BookOpen className="w-3 h-3 md:w-5 md:h-5 mr-1" />
                          <span className="text-xs md:text-sm">스토리</span>
                        </button>
                        <button
                          onClick={() => handleQuotesClick(story.id)}
                          className={`flex-1 px-2 py-2 md:py-3 rounded-md flex items-center justify-center
                            ${darkMode
                              ? 'bg-neutral-700 hover:bg-neutral-600 text-white'
                              : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-900'} `
                          }
                        >
                          <MessageCircle className="w-3 h-3 md:w-5 md:h-5 mr-1" />
                          <span className="text-xs md:text-sm">대사</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalityStoryList;