import StoryDialog from "./StoryDialog";

const StoryContent = ({ storyData, darkMode, handleGoBack, handleNavigation, storyType, selectedStory }) => {
    return (
        <div className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
            <div className="flex items-center mb-6">
                <button
                    onClick={handleGoBack}  // handleGoBack 사용
                    className={`px-4 py-2 rounded-md ${
                        darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'
                    }`}
                >
                    ← 돌아가기
                </button>
                <span></span>
            </div>

            {/* 챕터 내용 표시 */}
            <StoryDialog dataList={storyData?.dataList || []} darkMode={darkMode} />
        </div>
    );
};

export default StoryContent;