// functions.jsx
export const loadChapterData = async (chapterId) => {
    try {
        const response = await import(`../story/${chapterId}.json`);
        const data = response.default;
        return data;
    } catch (error) {
        console.error('챕터 데이터를 불러오는데 실패했습니다:', error);
        return null;
    }
};

export const saveScrollPosition = (scrollRef, path) => {
    scrollRef.current.set(path, window.scrollY);
};

export const restoreScrollPosition = (scrollRef, path) => {
    const savedPosition = scrollRef.current.get(path);
    if (savedPosition !== undefined) {
        requestAnimationFrame(() => {
            window.scrollTo(0, savedPosition);
        });
    }
};

export const restoreScroll = (scrollRef, pathname) => {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            const savedPosition = scrollRef.current.get(pathname);
            if (savedPosition !== undefined) {
                window.scrollTo(0, savedPosition);
            }
        });
    });
};

export const handleStoryClick = (story, storyType, navigate, location, scrollRef, setShouldRestoreScroll) => {
    const currentScroll = window.scrollY;
    setShouldRestoreScroll(false);
    window.scrollTo(0, 0);
    // 메인 스토리는 챕터 목록으로 이동
    if (story.chapters.length >= 2) {
        navigate(`/${storyType}/${story.id}`);
        // 사이드 스토리는 바로 첫 번째 챕터로 이동
    } else {
        navigate(`/${storyType}/${story.id}/${story.chapters[0].id}`);
    }
    scrollRef.current.set(location.pathname, currentScroll);
};

export const handleChapterClick = (chapterId, storyType, selectedStory, navigate, location, scrollRef, setShouldRestoreScroll) => {
    const currentScroll = window.scrollY;
    setShouldRestoreScroll(false);
    window.scrollTo(0, 0);
    navigate(`/${storyType}/${selectedStory.id}/${chapterId}`);
    scrollRef.current.set(location.pathname, currentScroll);
};

export const handleGoBack = (navigate, location, scrollRef, setShouldRestoreScroll, storyType, stories) => {
    const currentScroll = window.scrollY;
    setShouldRestoreScroll(true);

    const pathSegments = location.pathname.split('/').filter(segment => segment);
    let targetPath; // let으로 변수 선언

    // 현재 위치에 따른 다른 처리
    switch (pathSegments.length) {
        case 3: // chapter level: /storyType/storyId/chapterId
            // 스토리의 챕터 수에 따라 다르게 처리
            const story = stories?.[pathSegments[0]]?.find(s => s.id === pathSegments[1]);
            if (story) {
                // 챕터가 2개 이상인 경우에만 스토리 상세 페이지로 이동
                targetPath = story.chapters.length >= 2 
                    ? `/${pathSegments[0]}/${pathSegments[1]}` 
                    : `/${pathSegments[0]}`; // 챕터가 1개면 스토리 목록으로
            } else {
                targetPath = `/${pathSegments[0]}`; // 스토리를 찾을 수 없는 경우 스토리 목록으로
            }
            break;
        case 2: // story level: /storyType/storyId
            targetPath = `/${pathSegments[0]}`; // 스토리 목록으로
            break;
        case 1: // storyType level: /storyType
            targetPath = '/'; // 홈으로
            break;
        default:
            targetPath = '/';
    }

    navigate(targetPath);
    scrollRef.current.set(location.pathname, currentScroll);
};

export const handleNavigation = (path, location, scrollRef, setShouldRestoreScroll, navigate) => {
    saveScrollPosition(scrollRef, location.pathname);
    setShouldRestoreScroll(false);
    navigate(path);
};

export const handlePopState = (location, scrollRef, setShouldRestoreScroll) => {
    const currentScroll = window.scrollY;
    setShouldRestoreScroll(true);
    scrollRef.current.set(location.pathname, currentScroll);
};


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

export const navigateToNextChapter = (
    selectedStory,
    currentChapterId,
    storyType,
    navigate,
    location,
    scrollRef,
    setShouldRestoreScroll
) => {
    if (!selectedStory || !selectedStory.chapters) return;

    const currentIndex = selectedStory.chapters.findIndex(chapter => chapter.id === currentChapterId);
    if (currentIndex === -1 || currentIndex === selectedStory.chapters.length - 1) return;

    const nextChapter = selectedStory.chapters[currentIndex + 1];
    if (nextChapter) {
        const currentScroll = window.scrollY;
        setShouldRestoreScroll(false);
        navigate(`/${storyType}/${selectedStory.id}/${nextChapter.id}`);
        scrollRef.current.set(location.pathname, currentScroll);
    }
};

export const navigateToPreviousChapter = (
    selectedStory,
    currentChapterId,
    storyType,
    navigate,
    location,
    scrollRef,
    setShouldRestoreScroll
) => {
    if (!selectedStory || !selectedStory.chapters) return;

    const currentIndex = selectedStory.chapters.findIndex(chapter => chapter.id === currentChapterId);
    if (currentIndex === -1 || currentIndex === 0) return;

    const previousChapter = selectedStory.chapters[currentIndex - 1];
    if (previousChapter) {
        const currentScroll = window.scrollY;
        setShouldRestoreScroll(false);
        navigate(`/${storyType}/${selectedStory.id}/${previousChapter.id}`);
        scrollRef.current.set(location.pathname, currentScroll);
    }
}