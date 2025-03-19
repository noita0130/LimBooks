// components/StoryContent.jsx (개선된 버전)
import { useRef, useEffect } from "react";
import StoryDialog from "../components/StoryDialog";
import { ChevronLeft, ChevronRight, Undo2 } from "lucide-react";
import useDarkMode from "../hooks/useDarkmode";
import {
    backgroundTransition,
    buttonTransition,
    getBgStyle,
    getButtonStyle,
    getTextStyle,
    getSubTextStyle
} from '../components/TransitionStyles';

const StoryContent = ({
    storyData,
    handleGoBack,
    handleNavigation,
    storyType,
    selectedStory,
    handleNextChapter,
    handlePreviousChapter
}) => {
    const { darkMode } = useDarkMode();
    const storyRef = useRef(selectedStory);
    const locationRef = useRef(window.location.pathname);

    useEffect(() => {
        storyRef.current = selectedStory;
        locationRef.current = window.location.pathname;
    }, [selectedStory]);

    // 이전 값들을 사용하여 상태 계산
    const pathSegments = locationRef.current.split('/');
    const currentChapterId = pathSegments[pathSegments.length - 1];

    const currentChapterIndex = storyRef.current?.chapters?.findIndex(chapter =>
        chapter.id === currentChapterId
    );

    const currentChapter = currentChapterIndex !== -1
        ? storyRef.current?.chapters[currentChapterIndex]
        : null;

    const isFirstChapter = currentChapterIndex === 0;
    const isLastChapter = currentChapterIndex === storyRef.current?.chapters.length - 1;

    // 버튼 스타일 계산 함수 - 함수 대신 직접 클래스 문자열 반환
    const getNavButtonStyle = (isHoverable = true) => {
        const hoverClass = darkMode
            ? (isHoverable ? 'hover:bg-neutral-600' : '')
            : (isHoverable ? 'hover:bg-neutral-300' : '');

        return `px-3 md:px-4 py-2 transition-all duration-300 ease-in-out ${hoverClass}`;
    };

    // 버튼 컨테이너 스타일
    const buttonContainerStyle = `rounded-lg overflow-hidden flex transition-all duration-300 ease-in-out ${darkMode ? 'bg-neutral-700' : 'bg-neutral-200'
        }`;

    // 구분선 스타일
    const dividerStyle = `h-6 w-[1px] transition-all duration-300 ease-in-out ${darkMode ? 'bg-neutral-600' : 'bg-neutral-300'
        }`;

    // 돌아가기 버튼 스타일 
    const backButtonStyle = `px-4 py-2 rounded-md transition-all duration-300 ease-in-out ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
        }`;

    const ChapterNavigationButtons = () => (
        <div className={buttonContainerStyle}>
            {!isFirstChapter && (
                <button
                    onClick={handlePreviousChapter}
                    disabled={isFirstChapter}
                    className={`${getNavButtonStyle(!isFirstChapter)}
            ${isFirstChapter ? 'opacity-50 cursor-not-allowed' : ''}`}
                    aria-label="이전 챕터"
                >
                    <ChevronLeft className="transition-all duration-300 ease-in-out" />
                </button>
            )}
            {(!isFirstChapter && !isLastChapter) && (
                <div className="flex items-center">
                    <div className={dividerStyle}></div>
                </div>
            )}
            {!isLastChapter && (
                <button
                    onClick={handleNextChapter}
                    disabled={isLastChapter}
                    className={`${getNavButtonStyle(!isLastChapter)}
            ${isLastChapter ? 'opacity-50 cursor-not-allowed' : ''}`}
                    aria-label="다음 챕터"
                >
                    <ChevronRight className="transition-all duration-300 ease-in-out" />
                </button>
            )}
        </div>
    );

    const TitleSection = () => {
        if (!currentChapter || !storyRef.current) return null;
        return (
            <div className="flex-1 text-center mx-2">
                <span className={`font-semibold text-sm md:text-base ${getTextStyle(darkMode)}`}>
                    {currentChapter?.title}
                </span>
                {currentChapter?.subtitle && (
                    <span className={`ml-1 md:ml-2 text-xs md:text-sm ${getSubTextStyle(darkMode)}`}>
                        {currentChapter.subtitle}
                    </span>
                )}
            </div>
        );
    }

    // 수정된 모바일 헤더
    const MobileHeader = () => (
        <div className="flex flex-col space-y-3 mb-6 md:hidden">
            {/* 첫 번째 줄: 돌아가기 버튼과 이전/다음 버튼 */}
            <div className="flex justify-between items-center">
                <button
                    onClick={handleGoBack}
                    className={backButtonStyle}
                    aria-label="돌아가기"
                >
                    <Undo2 className="transition-all duration-300 ease-in-out" />
                </button>
                <ChapterNavigationButtons />
            </div>

            {/* 두 번째 줄: 제목 */}
            <div className="flex justify-center mt-2">
                <div className="text-center">
                    <span className={`font-semibold ${getTextStyle(darkMode)}`}>
                        {currentChapter?.title}
                    </span>
                    {currentChapter?.subtitle && (
                        <div className={getSubTextStyle(darkMode)}>
                            {currentChapter.subtitle}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className={`${getBgStyle(darkMode)} p-3 md:p-6 rounded-lg shadow-lg ${backgroundTransition}`}>
            {/* 모바일 헤더 */}
            <MobileHeader />

            {/* 데스크탑 헤더 */}
            <div className="hidden md:flex justify-between items-center mb-10">
                <button
                    onClick={handleGoBack}
                    className={backButtonStyle}
                    aria-label="돌아가기"
                >
                    <Undo2 className="transition-all duration-300 ease-in-out" />
                </button>

                <TitleSection />
                <div className="w-[120px] flex justify-end">
                    <ChapterNavigationButtons />
                </div>
            </div>

            <StoryDialog
                dataList={storyData?.dataList || []}
                darkMode={darkMode}
            />

            <div className="flex md:flex-row justify-between items-center mt-6">
                {/* 모바일 & 데스크탑 공통 하단 네비게이션 */}
                <div className="flex justify-between items-center w-full">
                    <button
                        onClick={handleGoBack}
                        className={backButtonStyle}
                        aria-label="돌아가기"
                    >
                        <Undo2 className="transition-all duration-300 ease-in-out" />
                    </button>
                    <div>
                        <ChapterNavigationButtons />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryContent;