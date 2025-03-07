import { useRef, useEffect } from "react";
import StoryDialog from "./StoryDialog";
import { ChevronLeft, ChevronRight, Undo2 } from "lucide-react";


const StoryContent = ({
    storyData,
    darkMode,
    handleGoBack,
    handleNavigation,
    storyType,
    selectedStory,
    handleNextChapter,
    handlePreviousChapter
}) => {
    // location이 변경되어도 마지막 값을 유지하기 위해 useRef 사용
    const storyRef = useRef(selectedStory);
    const locationRef = useRef(window.location.pathname);

    useEffect(() => {
        storyRef.current = selectedStory;
        locationRef.current = window.location.pathname;
    }, []);

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

    const ChapterNavigationButtons = () => (
        <div className={`rounded-lg overflow-hidden flex ${darkMode ? 'bg-neutral-700' : 'bg-neutral-200'}`}>
            {!isFirstChapter && (
                <button
                    onClick={handlePreviousChapter}
                    disabled={isFirstChapter}
                    className={`px-3 md:px-4 py-2 ${darkMode ? 'hover:bg-neutral-600' : 'hover:bg-neutral-300'}
                    ${isFirstChapter ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <ChevronLeft />
                </button>
            )}
            {(!isFirstChapter && !isLastChapter) && (
                <div className="flex items-center">
                    <div className={`h-6 w-[1px] ${darkMode ? 'bg-neutral-600' : 'bg-neutral-300'}`}></div>
                </div>
            )}
            {!isLastChapter && (
                <button
                    onClick={handleNextChapter}
                    disabled={isLastChapter}
                    className={`px-3 md:px-4 py-2 ${darkMode ? 'hover:bg-neutral-600' : 'hover:bg-neutral-300'}
                    ${isLastChapter ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <ChevronRight />
                </button>
            )}
        </div>
    );

    const TitleSection = () => {
        if (!currentChapter || !storyRef.current) return null;
        return (
            <div className="flex-1 text-center mx-2">
                <span className="font-semibold text-sm md:text-base">{currentChapter?.title}</span>
                {currentChapter?.subtitle && (
                    <span className={`ml-1 md:ml-2 text-xs md:text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
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
                    className={`px-4 py-2 rounded-md ${
                        darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
                    }`}
                >
                    <Undo2 />
                </button>
                <ChapterNavigationButtons />
            </div>
            
            {/* 두 번째 줄: 제목 */}
            <div className="flex justify-center mt-2">
                <div className="text-center">
                    <span className="font-semibold">{currentChapter?.title}</span>
                    {currentChapter?.subtitle && (
                        <div className={`${darkMode ? 'text-neutral-400' : 'text-neutral-600'} text-xs`}>
                            {currentChapter.subtitle}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

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
                        className={`px-4 py-2 rounded-md ${
                            darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
                        }`}
                    >
                        <Undo2 />
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