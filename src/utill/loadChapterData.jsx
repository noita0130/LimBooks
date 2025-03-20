// 최적화된 loadChapterData.jsx
export const BASE_PATH = '';

// 데이터 캐싱을 위한 간단한 캐시 구현
const chapterDataCache = new Map();

export const loadChapterData = async (storyId, chapterId, storyType) => {
    // 캐시 키 생성
    const cacheKey = `${storyType}-${storyId}-${chapterId}`;
    
    // 캐시에 데이터가 있으면 바로 반환 (불필요한 로드 방지)
    if (chapterDataCache.has(cacheKey)) {
        //console.log('캐시에서 데이터 로드:', cacheKey);
        return chapterDataCache.get(cacheKey);
    }

    try {
        let response;
        
        // 스토리 타입에 따라 다른 경로 사용
        if (storyType === 'main') {
            // main_X 형식에서 X 추출 (예: main_1 -> 1)
            const chapterNum = storyId.split('_')[1];
            response = await import(/* webpackPrefetch: true */ `../story/main/${chapterNum}/${chapterId}.json`);
        } 
        else if (storyType === 'mini') {
            // mini 폴더에서 바로 불러오기
            response = await import(/* webpackPrefetch: true */ `../story/mini/${chapterId}.json`);
        }
        // sub_X_Y 형식 처리 (헬스 치킨, 육참골단 등 서브 스토리)
        else if (storyId.startsWith('sub_')) {
            const parts = storyId.split('_');
            const mainChapter = parts[1];
            const subChapter = parts[2];
            response = await import(/* webpackPrefetch: true */ `../story/sub/${mainChapter}.${subChapter}/${chapterId}.json`);
        }
        // 위 경로가 실패하면 기존 경로 시도
        else {
            response = await import(/* webpackPrefetch: true */ `../story/${chapterId}.json`);
        }
        
        const data = response.default;
        
        // 캐시에 저장
        chapterDataCache.set(cacheKey, data);
        
        return data;
    } catch (error) {
        //console.error('챕터 데이터를 불러오는데 실패했습니다:', error, '경로:', `${storyType}/${storyId}/${chapterId}`);
        
        // 캐시 키 생성 (폴백용)
        const fallbackCacheKey = `fallback-${chapterId}`;
        
        // 폴백 캐시 확인
        if (chapterDataCache.has(fallbackCacheKey)) {
            //console.log('폴백 캐시에서 데이터 로드:', fallbackCacheKey);
            return chapterDataCache.get(fallbackCacheKey);
        }
        
        // 실패 시 기존 경로 시도
        try {
            const fallbackResponse = await import(/* webpackPrefetch: true */ `../story/${chapterId}.json`);
            //console.log('기존 경로에서 데이터를 불러왔습니다.');
            
            // 폴백 데이터도 캐시에 저장
            const fallbackData = fallbackResponse.default;
            chapterDataCache.set(fallbackCacheKey, fallbackData);
            
            return fallbackData;
        } catch (fallbackError) {
            //console.error('모든 경로에서 데이터 로드 실패');
            return null;
        }
    }
};

// 캐시 관련 유틸리티 함수들 (필요 시 사용)
export const clearChapterCache = () => {
    chapterDataCache.clear();
};

export const removeSingleChapterFromCache = (storyId, chapterId, storyType) => {
    const cacheKey = `${storyType}-${storyId}-${chapterId}`;
    chapterDataCache.delete(cacheKey);
};

export default loadChapterData;