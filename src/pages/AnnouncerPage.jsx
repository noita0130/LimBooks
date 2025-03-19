// components/AnnouncerPage.jsx (수정된 버전)
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import announcerData from '../data/announcerData';
import useDarkMode from '../hooks/useDarkmode';
import { 
    backgroundTransition, 
    getBgStyle, 
    getTextStyle 
} from '../components/TransitionStyles';

const AnnouncerPage = () => {
    const { darkMode } = useDarkMode();
    const navigate = useNavigate();
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    // 화면 크기 변경 감지 - PersonalityPage와 동일하게 구현
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleAnnouncerClick = (announcerId) => {
        navigate(`/announcers/${announcerId}`);
    };

    return (
        <div className={`w-full flex flex-col items-center justify-center p-4 md:p-12 ${backgroundTransition} ${
            darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'
        }`}>
            <div className={`py-2 text-2xl md:text-3xl font-semibold mb-6 ${backgroundTransition} ${
                darkMode ? 'text-white' : 'text-black'
            }`}>
                아나운서
            </div>
            {/* 그리드 레이아웃을 반응형으로 변경 - PersonalityPage와 동일한 레이아웃 */}
            <div className="grid w-full max-w-[1000px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                {announcerData.map((announcer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnnouncerClick(announcer.id)}
                        className={`flex flex-col ${backgroundTransition} ${
                            darkMode 
                                ? 'bg-neutral-800 hover:bg-neutral-700' 
                                : 'bg-neutral-200 hover:bg-neutral-300'
                            } rounded-lg shadow-md p-2 items-center cursor-pointer hover:shadow-lg
                            transition-transform duration-200 transform hover:scale-105`}
                    >
                        {/* 이미지 컨테이너 - PersonalityPage와 동일한 비율 적용 */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-2">
                            <img
                                src={announcer.image}
                                alt={announcer.name}
                                className="w-full h-full rounded-lg object-cover"
                            />
                        </div>
                        <span className={`mt-1 text-center font-medium ${backgroundTransition} ${
                            darkMode ? 'text-neutral-300' : 'text-neutral-700'
                        }`}>
                            {announcer.name}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AnnouncerPage;