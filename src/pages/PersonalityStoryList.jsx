import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, BookOpen } from "lucide-react";
import personalityData from '../data/personalityData';
import personalityList from '../data/personalityList';
import handleGoBack from '../utill/handleGoBack';


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
    // 스토리 상세 페이지로 이동
    navigate(`/scripts/${personalityId}/${storyId}`);
  };

  const handleQuotesClick = (storyId) => {
    // 대사집 페이지로 이동
    navigate(`/scripts/${personalityId}/${storyId}`);
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
        <div className="flex items-center mb-8">
          <button
            onClick={handleBack}
            className={`px-4 py-2 rounded-md w-[120px] ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
              }`}
          >
            ← 돌아가기
          </button>
          <h1 className="text-2xl font-bold ml-4">{characterInfo.name}의 인격 목록</h1>
        </div>

        {stories.length === 0 ? (
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-neutral-800' : 'bg-white'} shadow-md`}>
            <p>이 캐릭터의 인격 데이터가 없습니다.</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-6">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`w-[calc(50%-0.75rem)] sm:w-[calc(50%-0.75rem)] md:w-[calc(33.3%-1rem)] lg:w-[calc(25%-1.5rem)] ${darkMode ? 'bg-neutral-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-sm md:text-xl lg:text-xl font-semibold mb-3">{story.title}</h2>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <button
                      onClick={() => handleStoryClick(story.id)}
                      className={`px-4 py-2 w-auto rounded-md flex justify-center
                      ${darkMode
                          ? 'bg-neutral-800 hover:bg-neutral-700 text-white'
                          : 'bg-white hover:bg-neutral-300 text-neutral-900'} `
                      }
                    >
                      <BookOpen className="hover:" />
                    </button>
                    <button
                      onClick={() => handleQuotesClick(story.id)}
                      className={`px-4 py-2 w-auto rounded-md flex justify-center
                        ${darkMode
                          ? 'bg-neutral-800 hover:bg-neutral-700 text-white'
                          : 'bg-white hover:bg-neutral-300 text-neutral-900'} `
                      }
                    >
                      <MessageCircle className="" />
                    </button>
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