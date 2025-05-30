import { } from "lucide-react";

const handleGoBack = (navigate, location, scrollRef, setShouldRestoreScroll, storyType, stories, setStoryData, setSelectedStory) => {
    // 현재 스크롤 위치 저장
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    // BASE_PATH 상수 임포트 필요
    const BASE_PATH = '';

    // 경로 세그먼트에서 빈 문자열 제거 및 BASE_PATH 첫 부분 제거
    const pathSegments = location.pathname.split('/')
        .filter(segment => segment)
        .filter((segment, index) => index !== 0 || segment !== 'LimBooks');

    let targetPath;

    // 특수 케이스: /sinner/:personalityId 또는 그 하위 경로들
    if (pathSegments[0] === 'sinner') {
        switch (pathSegments.length) {
            case 5:
                // /sinner/personality/Yisang/story/KR_P10101 -> /sinner/Yisang
                if (pathSegments[3] === 'story' || pathSegments[3] === 'voice') {
                    targetPath = `${BASE_PATH}/sinner/personality/${pathSegments[2]}`;
                } else {
                    targetPath = `${BASE_PATH}/sinner`;
                }
                break;
            case 3:
                // /sinner/personality/Yisang/ -> /sinner/personality
                targetPath = `${BASE_PATH}/sinner`;
                break;
            case 2:
                // /sinner/Yisang -> /personality
                targetPath = `${BASE_PATH}/sinner`;
                break;
            default:
                // /sinner -> /
                targetPath = `${BASE_PATH}`;
                break;
        }

        navigate(targetPath);
        if (scrollRef && scrollRef.current) {
            scrollRef.current.set(location.pathname, currentScroll);
        }
        if (setShouldRestoreScroll) {
            setShouldRestoreScroll(true);
        }
        return;
    }

    switch (pathSegments.length) {
        case 3: // chapter level
            const currentStoryType = pathSegments[0];
            const currentStoryId = pathSegments[1];
            const story = stories && stories[currentStoryType]?.find(s => s.id === currentStoryId);

            if (story) {
                targetPath = story.chapters && story.chapters.length >= 2
                    ? `${BASE_PATH}/${currentStoryType}/${currentStoryId}`
                    : `${BASE_PATH}/${currentStoryType}`;
            } else {
                targetPath = `${BASE_PATH}/${currentStoryType}`;
            }

            // 애니메이션이 완료된 후에 상태 초기화
            setTimeout(() => {
                if (setStoryData) setStoryData(null);
            }, 300);
            break;

        case 2:
            targetPath = `${BASE_PATH}/${pathSegments[0]}`;
            setTimeout(() => {
                if (setSelectedStory) setSelectedStory(null);
            }, 300);
            break;

        case 1:
            targetPath = `${BASE_PATH}`;
            break;

        default:
            targetPath = `${BASE_PATH}`;
    }

    navigate(targetPath);
    if (scrollRef && scrollRef.current) {
        scrollRef.current.set(location.pathname, currentScroll);
    }
    if (setShouldRestoreScroll) {
        setShouldRestoreScroll(true);
    }
};

export default handleGoBack;