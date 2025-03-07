import { useState, useEffect } from 'react';
import storiesData from '../data/storiesData';

const useStoryData = (storyType) => {
    const [stories, setStories] = useState(storiesData);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (storyType && (storyType === 'main' || storyType === 'mini')) {
            setLoading(true);
            calculateWordCounts();
        }
    }, [storyType]);

    const calculateWordCounts = async () => {
        if (!stories[storyType]) {
            setLoading(false);
            return;
        }

        try {
            const updatedStories = await Promise.all(
                stories[storyType].map(async (story) => {
                    const chapterCounts = await Promise.all(
                        story.chapters.map(async (chapter) => {
                            try {
                                // 새로운 폴더 구조에 맞게 경로 수정
                                let response;
                                
                                if (storyType === 'main') {
                                    // main_X 형식에서 X 추출 (예: main_1 -> 1)
                                    const chapterNum = story.id.split('_')[1];
                                    response = await import(`../story/main/${chapterNum}/${chapter.id}.json`);
                                } 
                                else if (storyType === 'mini') {
                                    // mini 폴더에서 바로 불러오기
                                    response = await import(`../story/mini/${chapter.id}.json`);
                                }
                                // sub_X_Y 형식 처리 (헬스 치킨, 육참골단 등 서브 스토리)
                                else if (story.id.startsWith('sub_')) {
                                    const parts = story.id.split('_');
                                    const mainChapter = parts[1];
                                    const subChapter = parts[2];
                                    response = await import(`../story/sub/${mainChapter}.${subChapter}/${chapter.id}.json`);
                                }
                                // 위 경로가 모두 실패하면 기존 경로 시도
                                else {
                                    response = await import(`../story/${chapter.id}.json`);
                                }
                                
                                const data = response.default;
                                const wordCount = data.dataList.reduce(
                                    (acc, curr) => acc + (curr.content?.length || 0),
                                    0
                                );
                                return { ...chapter, wordCount };
                            } catch (error) {
                                console.error(`챕터 ${chapter.id} 데이터 로드 실패:`, error);
                                
                                // 실패 시 기존 경로 시도
                                try {
                                    const fallbackResponse = await import(`../story/${chapter.id}.json`);
                                    const data = fallbackResponse.default;
                                    const wordCount = data.dataList.reduce(
                                        (acc, curr) => acc + (curr.content?.length || 0),
                                        0
                                    );
                                    console.log(`기존 경로에서 ${chapter.id} 데이터를 불러왔습니다.`);
                                    return { ...chapter, wordCount };
                                } catch (fallbackError) {
                                    console.error(`모든 경로에서 ${chapter.id} 로드 실패`);
                                    return { ...chapter, wordCount: 0 };
                                }
                            }
                        })
                    );

                    const totalWordCount = chapterCounts.reduce(
                        (acc, chapter) => acc + (chapter.wordCount || 0),
                        0
                    );

                    return {
                        ...story,
                        chapters: chapterCounts,
                        wordCount: totalWordCount
                    };
                })
            );

            setStories(prev => ({
                ...prev,
                [storyType]: updatedStories
            }));
        } catch (error) {
            console.error('글자 수 계산 중 오류 발생:', error);
        } finally {
            setLoading(false);
        }
    };

    return { stories, loading };
};

export default useStoryData;