import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import personalityList from '../data/personalityList';
import useDarkMode from '../hooks/useDarkmode';

const PersonalityPage = () => {
    // 스타일 계산을 위한 상수
    const BUTTON_HEIGHT = 'h-10'; // 버튼 높이
    const BUTTON_CONTAINER_HEIGHT = 'max-h-24'; // 버튼 컨테이너 최대 높이
    const { darkMode } = useDarkMode();
    const navigate = useNavigate();
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
    const [expandedCard, setExpandedCard] = useState(null);

    // 화면 크기 변경 감지
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // 카드 클릭 시 확장/축소 토글
    const handleCardClick = (characterId) => {
        if (expandedCard === characterId) {
            setExpandedCard(null);
        } else {
            setExpandedCard(characterId);
        }
    };

    // 인격 정보로 이동
    const goToPersonality = (e, personalityId) => {
        e.stopPropagation(); // 버블링 방지
        navigate(`/personality/${personalityId}`);
    };

    // E.G.O 정보로 이동
    const goToEGO = (e, personalityId) => {
        e.stopPropagation(); // 버블링 방지
        navigate(`/ego/${personalityId}`);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center p-4 md:p-12">
            <div className='py-2 text-2xl md:text-3xl font-semibold mb-6'>
                인격 스토리 / 대사집
            </div>
            {/* 그리드 레이아웃을 반응형으로 변경 */}
            <div className="grid w-full max-w-[1000px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                {personalityList.map((character, index) => (
                    <div
                        key={index}
                        onClick={() => handleCardClick(character.id)}
                        className={`flex flex-col ${darkMode ? 'bg-neutral-800' : 'bg-neutral-200'} 
                        rounded-lg shadow-md p-2 items-center cursor-pointer
                        transition-all duration-300 transform justify-between
                        hover:scale-105 ease-in-out
                        ${darkMode ? 'hover:bg-neutral-700' : 'hover:bg-neutral-300'}
                        ${expandedCard === character.id ? 'scale-100 hover:scale-105' : ''}`}
                        style={{ 
                            height: expandedCard === character.id ? 'auto' : undefined,
                            minHeight: expandedCard === character.id ? 
                                (isLargeScreen ? '120px' : '100px') : undefined,
                            transition: 'transform 300ms, background-color 300ms'
                        }}
                    >
                        {/* 이미지 컨테이너 - 확장 시 축소됨 */}
                        <div 
                            className={`relative w-full overflow-hidden rounded-lg mb-2 transition-all duration-300
                            ${expandedCard === character.id ? 'aspect-[4/1.5] sm:aspect-[4/1.6] md:aspect-[4/1.5] lg:aspect-[2/1.6]' : 'aspect-[4/3] lg:aspect-[2/3]'}`}
                        >
                            <img
                                src={isLargeScreen ? character.image : character.mobileImage}
                                alt={character.name}
                                className={`w-full rounded-lg transition-all duration-300 
                                ${expandedCard === character.id ? 'h-auto' : ''}`}
                            />
                        </div>
                        <span className={`mt-1 text-center font-medium ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                            {character.name}
                        </span>

                        {/* 확장 시 나타나는 버튼들 */}
                        <div 
                            className={`w-full mt-2 flex flex-col gap-2 transition-all duration-300 overflow-hidden
                            ${expandedCard === character.id 
                                ? 'max-h-40 sm:max-h-32 md:max-h-28 lg:max-h-24 opacity-100' 
                                : 'max-h-0 opacity-0 m-0 p-0'}`}
                        >
                            <button
                                onClick={(e) => goToPersonality(e, character.id)}
                                className={`w-full py-1 sm:py-1 md:py-1.5 lg:py-2 rounded-md text-sm font-medium transition-colors h-8 sm:h-8 md:h-9 lg:h-10
                                ${darkMode 
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                                    : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                            >
                                인격 보기
                            </button>
                            <button
                                onClick={(e) => goToEGO(e, character.id)}
                                className={`w-full py-1 sm:py-1 md:py-1.5 lg:py-2 rounded-md text-sm font-medium transition-colors h-8 sm:h-8 md:h-9 lg:h-10
                                ${darkMode 
                                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                                    : 'bg-red-500 hover:bg-red-600 text-white'}`}
                            >
                                E.G.O 보기
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonalityPage;