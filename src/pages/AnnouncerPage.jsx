// components/AnnouncerPage.jsx (수정된 코드)
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import announcerData from '../data/announcerData';
import useDarkMode from '../hooks/useDarkmode';
import { 
    backgroundTransition, 
    textTransition
} from '../components/TransitionStyles';

const AnnouncerPage = () => {
    const { darkMode } = useDarkMode();
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

    const handleAnnouncerClick = (announcerId) => {
        navigate(`/announcers/${announcerId}`);
    };

    // 카드 애니메이션 설정
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.01
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <div className={`w-full flex flex-col items-center justify-center p-4 md:p-12 ${backgroundTransition} ${
            darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'
        }`}>
            <div className={`py-2 text-2xl md:text-3xl font-semibold mb-6 ${textTransition} ${
                darkMode ? 'text-white' : 'text-black'
            }`}>
                아나운서
            </div>
            
            {/* 그리드 레이아웃을 motion.div로 애니메이션 적용 */}
            <motion.div 
                className="grid w-full max-w-[1000px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {announcerData.map((announcer, index) => (
                    <motion.button
                        key={index}
                        onClick={() => handleAnnouncerClick(announcer.id)}
                        className={`flex flex-col ${backgroundTransition} ${
                            darkMode 
                                ? 'bg-neutral-800 hover:bg-neutral-700' 
                                : 'bg-neutral-200 hover:bg-neutral-300'
                            } rounded-lg shadow-md p-2 items-center cursor-pointer hover:shadow-lg
                            transition-transform duration-200 transform hover:scale-[1.03]`}
                        variants={cardVariants}
                        style={{
                            transition: 'transform 300ms, background-color 300ms'
                        }}
                    >
                        {/* 이미지 컨테이너 - 원래 비율 유지 */}
                        <div className="relative w-full overflow-hidden rounded-lg mb-2" 
                             style={{
                                 aspectRatio: '4/3'
                             }}>
                            <img
                                src={announcer.image}
                                alt={announcer.name}
                                className="w-full h-full rounded-lg object-cover transition-all duration-300"
                            />
                        </div>
                        <span className={`mt-1 text-center font-medium ${textTransition} ${
                            darkMode ? 'text-neutral-300' : 'text-neutral-700'
                        }`}>
                            {announcer.name}
                        </span>
                    </motion.button>
                ))}
            </motion.div>
        </div>
    );
};

export default AnnouncerPage;