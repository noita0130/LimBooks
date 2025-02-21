// functions.jsx
export const BASE_PATH = '/LimBooks'

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
      navigate(`${BASE_PATH}/${storyType}/${story.id}`);
      // 사이드 스토리는 바로 첫 번째 챕터로 이동
    } else {
      navigate(`${BASE_PATH}/${storyType}/${story.id}/${story.chapters[0].id}`);
    }
    scrollRef.current.set(location.pathname, currentScroll);
  };

  export const handleChapterClick = (chapterId, storyType, selectedStory, navigate, location, scrollRef, setShouldRestoreScroll) => {
    const currentScroll = window.scrollY;
    setShouldRestoreScroll(false);
    window.scrollTo(0, 0);
    navigate(`${BASE_PATH}/${storyType}/${selectedStory.id}/${chapterId}`);
    scrollRef.current.set(location.pathname, currentScroll);
  };



export const handleNavigation = (path, location, scrollRef, setShouldRestoreScroll, navigate) => {
    saveScrollPosition(scrollRef, location.pathname);
    setShouldRestoreScroll(false);
    navigate(`${BASE_PATH}${path}`);
  };

export const handlePopState = (location, scrollRef, setShouldRestoreScroll) => {
    const currentScroll = window.scrollY;
    setShouldRestoreScroll(true);
    scrollRef.current.set(location.pathname, currentScroll);
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
      navigate(`${BASE_PATH}/${storyType}/${selectedStory.id}/${nextChapter.id}`);
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
      navigate(`${BASE_PATH}/${storyType}/${selectedStory.id}/${previousChapter.id}`);
      scrollRef.current.set(location.pathname, currentScroll);
    }
  };