import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, BookOpen } from "lucide-react";
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

  useEffect(() => {
    // 캐릭터 정보 가져오기
    const character = personalityList.find(char => char.id === personalityId);
    if (character) {
      setCharacterInfo(character);
    }

    // 해당 인격의 스토리 목록 가져오기
    const personalityStories = personalityData[personalityId] || [];
    setStories(personalityStories);
  }, [personalityId]);

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

  if (!characterInfo) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'} p-6`}>
        <p>로딩 중...</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen rounded-lg ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'} p-6`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center mb-8">
          <button
            onClick={handleBack}
            className={`px-4 py-2 rounded-md inline-flex items-center justify-center mb-4 w- sm:mb-0
              ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
              }`}
          >
            <Undo2 />
          </button>
          <h1 className="text-xl sm:text-2xl font-bold sm:ml-4">{characterInfo.name}의 인격 목록</h1>
        </div>

        {stories.length === 0 ? (
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-neutral-800' : 'bg-white'} shadow-md`}>
            <p>이 캐릭터의 인격 데이터가 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden h-full`}
              >
                {/* 모바일 뷰 (기존 디자인 유지) - md 미만에서만 표시 */}
                <div className="flex flex-col md:hidden h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h2 className="text-sm font-semibold mb-auto">{story.title}</h2>
                    <div className="flex w-full mt-4">
                      <button
                        onClick={() => handleStoryClick(story.id)}
                        className={`flex-1 mr-1 px-2 py-2 rounded-md flex justify-center
                        ${darkMode
                            ? 'bg-neutral-700 hover:bg-neutral-600 text-white'
                            : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-900'} `
                        }
                      >
                        <BookOpen />
                      </button>
                      <button
                        onClick={() => handleQuotesClick(story.id)}
                        className={`flex-1 px-2 py-2 rounded-md flex justify-center
                          ${darkMode
                            ? 'bg-neutral-700 hover:bg-neutral-600 text-white'
                            : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-900'} `
                        }
                      >
                        <MessageCircle />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* PC 뷰 (새 디자인) - md 이상에서만 표시 */}
                <div className="hidden md:flex h-full">
                  <div className="w-1/3 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-6 flex flex-col h-full">
                    <h2 className="text-xl font-semibold mb-auto">{story.title}</h2>
                    <div className="flex flex-col sm:flex-row w-full mt-4">
                      <button
                        onClick={() => handleStoryClick(story.id)}
                        className={`flex-1 mb-2 sm:mb-0 sm:mr-2 px-5 py-2 rounded-md flex items-center justify-center whitespace-nowrap
                        ${darkMode
                            ? 'bg-neutral-700 hover:bg-neutral-600 text-white'
                            : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-900'} `
                        }
                      >
                        <BookOpen className="mr-2" />
                        <span className="hidden sm:inline">스토리</span>
                      </button>
                      <button
                        onClick={() => handleQuotesClick(story.id)}
                        className={`flex-1 px-5 py-2 rounded-md flex items-center justify-center whitespace-nowrap
                          ${darkMode
                            ? 'bg-neutral-700 hover:bg-neutral-600 text-white'
                            : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-900'} `
                        }
                      >
                        <MessageCircle className="mr-2" />
                        <span className="hidden sm:inline">대사집</span>
                      </button>
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