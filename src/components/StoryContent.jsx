import { useRef, useEffect } from "react";
import StoryDialog from "./StoryDialog";

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

    // 컴포넌트가 처음 마운트될 때만 값을 설정
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
                    className={`px-4 py-2 ${darkMode ? 'hover:bg-neutral-600' : 'hover:bg-neutral-300'}
                    ${isFirstChapter ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    ←
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
                    className={`px-4 py-2 ${darkMode ? 'hover:bg-neutral-600' : 'hover:bg-neutral-300'}
                    ${isLastChapter ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    →
                </button>
            )}
        </div>
    );

    const TitleSection = () => {
        if (!currentChapter || !storyRef.current) return null;
        return (
            <div className="flex-1 text-center">
                <span className="font-semibold">{currentChapter?.title}</span>
                {currentChapter?.subtitle && (
                    <span className={`ml-2 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        {currentChapter.subtitle}
                    </span>
                )}
            </div>
        );
    }

    return (
        <div className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
            <div className="flex justify-between items-center mb-10">
                <button
                    onClick={handleGoBack}
                    className={`px-4 py-2 rounded-md ${
                        darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
                    }`}
                >
                    ← 돌아가기
                </button>

                <TitleSection />
                <div className="w-[100px] flex justify-end">
                    <ChapterNavigationButtons />
                </div>
                
            </div>

            <StoryDialog
                dataList={storyData?.dataList || []}
                darkMode={darkMode}
            />

            <div className="flex justify-between items-center">
                <button
                    onClick={handleGoBack}
                    className={`px-4 py-2 rounded-md ${
                        darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
                    }`}
                >
                    ← 돌아가기
                </button>
                <ChapterNavigationButtons />
            </div>
        </div>
    );
};

export default StoryContent;