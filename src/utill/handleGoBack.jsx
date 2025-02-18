const handleGoBack = (navigate, location, scrollRef, setShouldRestoreScroll, storyType, stories, setStoryData, setSelectedStory) => {
    const currentScroll = window.scrollY;
    setShouldRestoreScroll(true);

    const pathSegments = location.pathname.split('/').filter(segment => segment);
    let targetPath;

    switch (pathSegments.length) {
        case 3: // chapter level
            const currentStoryType = pathSegments[0];
            const currentStoryId = pathSegments[1];
            const story = stories[currentStoryType]?.find(s => s.id === currentStoryId);
            
            if (story) {
                targetPath = story.chapters.length >= 2 
                    ? `/${currentStoryType}/${currentStoryId}`
                    : `/${currentStoryType}`;
            } else {
                targetPath = `/${currentStoryType}`;
            }
            
            // 애니메이션이 완료된 후에 상태 초기화
            setTimeout(() => {
                setStoryData(null);
            }, 300);
            break;

        case 2:
            targetPath = `/${pathSegments[0]}`;
            setTimeout(() => {
                setSelectedStory(null);
            }, 300);
            break;

        case 1:
            targetPath = '/';
            break;

        default:
            targetPath = '/';
    }

    navigate(targetPath);
    scrollRef.current.set(location.pathname, currentScroll);
};

export default handleGoBack;