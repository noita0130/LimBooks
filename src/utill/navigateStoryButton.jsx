export const navigateToNextStory = (
    stories,
    currentStoryId,
    storyType,
    navigate,
    location,
    scrollRef,
    setShouldRestoreScroll
) => {
    if (!stories || !stories[storyType]) return;

    const currentIndex = stories[storyType].findIndex(story => story.id === currentStoryId);
    if (currentIndex === -1 || currentIndex === stories[storyType].length - 1) return;

    const nextStory = stories[storyType][currentIndex + 1];
    if (nextStory) {
        // 현재 스크롤 위치 저장
        scrollRef.current.set(location.pathname, window.scrollY);
        
        // 스토리가 단일 챕터인 경우 바로 해당 챕터로 이동
        if (nextStory.chapters.length === 1) {
            navigate(`/${storyType}/${nextStory.id}/${nextStory.chapters[0].id}`);
        } else {
            navigate(`/${storyType}/${nextStory.id}`);
        }
        
        window.scrollTo(0, 0);
    }
};

export const navigateToPreviousStory = (
    stories,
    currentStoryId,
    storyType,
    navigate,
    location,
    scrollRef,
    setShouldRestoreScroll
) => {
    if (!stories || !stories[storyType]) return;

    const currentIndex = stories[storyType].findIndex(story => story.id === currentStoryId);
    if (currentIndex === -1 || currentIndex === 0) return;

    const previousStory = stories[storyType][currentIndex - 1];
    if (previousStory) {
        // 현재 스크롤 위치 저장
        scrollRef.current.set(location.pathname, window.scrollY);
        
        // 스토리가 단일 챕터인 경우 바로 해당 챕터로 이동
        if (previousStory.chapters.length === 1) {
            navigate(`/${storyType}/${previousStory.id}/${previousStory.chapters[0].id}`);
        } else {
            navigate(`/${storyType}/${previousStory.id}`);
        }
        window.scrollTo(0, 0);
    }
};
