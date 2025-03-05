import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Undo2 } from 'lucide-react';
import loadPersonalityVoiceData from '../utill/loadPersonalityVoiceData';

const PersonalityVoiceContent = ({ darkMode }) => {
  const { personalityId, storyId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const scrollRef = useRef(new Map());
  const [voiceData, setVoiceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // 인격 대사집 데이터 로드
        const data = await loadPersonalityVoiceData(personalityId, storyId);
        setVoiceData(data);
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
  }, [personalityId, storyId]);

  const handleGoBack = () => {
    navigate(`/personality/${personalityId}`);
  };

  if (loading) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'} p-6`}>
        <p>로딩 중...</p>
      </div>
    );
  }

  // 대사집을 카테고리별로 그룹화
  const groupedQuotes = voiceData?.quotes?.reduce((acc, quote) => {
    if (!acc[quote.category]) {
      acc[quote.category] = [];
    }
    acc[quote.category].push(quote);
    return acc;
  }, {}) || {};

  return (
    <div className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} p-3 md:p-6 rounded-lg shadow-lg`}>
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handleGoBack}
          className={`px-4 py-2 rounded-md ${
            darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
          }`}
        >
          <Undo2 />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-center flex-1">{voiceData?.title || ''} 대사집</h1>
        <div className="w-[48px]"></div> {/* 헤더 균형을 위한 빈 공간 */}
      </div>

      {/* 대사집 내용 */}
      <div className="space-y-6">
        {Object.entries(groupedQuotes).map(([category, quotes]) => (
          <div key={category} className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 pb-2 ${
              darkMode ? 'border-b border-neutral-700' : 'border-b border-neutral-300'
            }`}>
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quotes.map((quote, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg transition-all hover:shadow-md ${
                    darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-100 hover:bg-neutral-200'
                  }`}
                >
                  <div className="flex flex-col">
                    <p className="font-bold mb-2">{quote.situation}</p>
                    <p className="italic">{quote.text}</p>
                    {quote.condition && (
                      <p className={`mt-2 text-sm ${
                        darkMode ? 'text-neutral-400' : 'text-neutral-600'
                      }`}>
                        조건: {quote.condition}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 하단 네비게이션 */}
      <div className="flex justify-start items-center mt-6">
        <button
          onClick={handleGoBack}
          className={`px-4 py-2 rounded-md ${
            darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
          }`}
        >
          <Undo2 />
        </button>
      </div>
    </div>
  );
};

export default PersonalityVoiceContent;