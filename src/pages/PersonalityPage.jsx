import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import personalityList from '../data/personalityList';

const PersonalityPage = ({ darkMode }) => {
    const navigate = useNavigate();
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

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

    const handlePersonalityClick = (personalityId) => {
        navigate(`/personality/${personalityId}`);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center p-4 md:p-12">
            <div className='py-2 text-2xl md:text-3xl font-semibold mb-6'>
                인격 스토리 / 대사집
            </div>
            {/* 그리드 레이아웃을 반응형으로 변경 */}
            <div className="grid w-full max-w-[1000px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                {personalityList.map((character, index) => (
                    <button
                        key={index}
                        onClick={() => handlePersonalityClick(character.id)}
                        className={`flex flex-col ${darkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-neutral-200 hover:bg-neutral-300'} 
                        rounded-lg shadow-md p-2 items-center cursor-pointer hover:shadow-lg
                        transition-transform duration-300 transform hover:scale-105`}
                    >
                        {/* 이미지 컨테이너 - 반응형으로 비율 변경 */}
                        <div className="relative w-full aspect-[4/3] lg:aspect-[2/3] overflow-hidden rounded-lg mb-2">
                            <img
                                src={isLargeScreen ? character.image : character.mobileImage}
                                alt={character.name}
                                className="w-full h-full rounded-lg object-cover"
                            />
                        </div>
                        <span className={`mt-1 text-center font-medium ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                            {character.name}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PersonalityPage;