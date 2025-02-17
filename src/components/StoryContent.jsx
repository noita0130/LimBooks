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

    // pathSegments를 사용하여 현재 chapterId 가져오기
    const pathSegments = window.location.pathname.split('/');
    const currentChapterId = pathSegments[pathSegments.length - 1];

   // 현재 챕터의 인덱스를 찾습니다
    const currentChapterIndex = selectedStory?.chapters?.findIndex(chapter => {
        console.log('Comparing chapter id:', chapter.id);
        console.log('with storyData id:', storyData.id);
        return chapter.id === currentChapterId;
    });

    console.log('Current Chapter ID:', currentChapterId);
    console.log('Current Chapter Index:', currentChapterIndex);

    // 현재 챕터 정보 가져오기
    const currentChapter = currentChapterIndex !== -1 
        ? selectedStory?.chapters[currentChapterIndex] 
        : selectedStory?.chapters[0];  // fallback to first chapter if not found


    // 이전/다음 챕터가 있는지 확인합니다
    const isFirstChapter = currentChapterIndex === 0;
    const isLastChapter = currentChapterIndex === selectedStory?.chapters.length - 1;

    const ChapterNavigationButtons = () => (
        <div className={`rounded-lg overflow-hidden flex ${darkMode ? 'bg-neutral-700' : 'bg-neutral-200'}`}>
            <button
                onClick={handlePreviousChapter}
                disabled={isFirstChapter}
                className={`px-4 py-2 ${darkMode ? 'hover:bg-neutral-600' : 'hover:bg-neutral-300'}
                    ${isFirstChapter ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                ←
            </button>
            <div className="flex items-center">
                <div className={`h-6 w-[1px] ${darkMode ? 'bg-neutral-600' : 'bg-neutral-300'}`}></div>
            </div>
            <button
                onClick={handleNextChapter}
                disabled={isLastChapter}
                className={`px-4 py-2 ${darkMode ? 'hover:bg-neutral-600' : 'hover:bg-neutral-300'}
                    ${isLastChapter ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                →
            </button>
        </div>
    );

    return (
        
        <div className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
            <div className="flex justify-between items-center mb-10">
                <button
                    onClick={handleGoBack}  // handleGoBack 사용
                    className={`px-4 py-2 rounded-md ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
                        }`}
                >
                    ← 돌아가기
                </button>
                <div className="flex-1 text-center">
                    <span className="font-semibold">{currentChapter?.title}</span>
                    {currentChapter?.subtitle && (
                        <span className={`ml-2 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                            {currentChapter.subtitle}
                        </span>
                    )}
                </div>

                
                <ChapterNavigationButtons />

            </div>

            {/* 챕터 내용 표시 */}
            <StoryDialog
                dataList={storyData?.dataList || []}
                darkMode={darkMode}

            />

            <div className="flex justify-between items-center">
                <button
                    onClick={handleGoBack}  // handleGoBack 사용
                    className={`px-4 py-2 rounded-md ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
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