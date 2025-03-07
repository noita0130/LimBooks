
export const BASE_PATH = ''
export const loadChapterData = async (storyId, chapterId, storyType) => {
    try {
        let response;
        
        // 스토리 타입에 따라 다른 경로 사용
        if (storyType === 'main') {
            // main_X 형식에서 X 추출 (예: main_1 -> 1)
            const chapterNum = storyId.split('_')[1];
            response = await import(`../story/main/${chapterNum}/${chapterId}.json`);
        } 
        else if (storyType === 'mini') {
            // mini 폴더에서 바로 불러오기
            response = await import(`../story/mini/${chapterId}.json`);
        }
        // sub_X_Y 형식 처리 (헬스 치킨, 육참골단 등 서브 스토리)
        else if (storyId.startsWith('sub_')) {
            const parts = storyId.split('_');
            const mainChapter = parts[1];
            const subChapter = parts[2];
            response = await import(`../story/sub/${mainChapter}.${subChapter}/${chapterId}.json`);
        }
        // 위 경로가 실패하면 기존 경로 시도
        else {
            response = await import(`../story/${chapterId}.json`);
        }
        
        const data = response.default;
        return data;
    } catch (error) {
        console.error('챕터 데이터를 불러오는데 실패했습니다:', error, '경로:', `${storyType}/${storyId}/${chapterId}`);
        
        // 실패 시 기존 경로 시도
        try {
            const fallbackResponse = await import(`../story/${chapterId}.json`);
            console.log('기존 경로에서 데이터를 불러왔습니다.');
            return fallbackResponse.default;
        } catch (fallbackError) {
            console.error('모든 경로에서 데이터 로드 실패');
            return null;
        }
    }
};

export default loadChapterData;