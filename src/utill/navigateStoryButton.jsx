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
        const currentScroll = window.scrollY;
        setShouldRestoreScroll(false);
        navigate(`/${storyType}/${nextStory.id}`);
        scrollRef.current.set(location.pathname, currentScroll);
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
        const currentScroll = window.scrollY;
        setShouldRestoreScroll(false);
        navigate(`/${storyType}/${previousStory.id}`);
        scrollRef.current.set(location.pathname, currentScroll);
    }
};