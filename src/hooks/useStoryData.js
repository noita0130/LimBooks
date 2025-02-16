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
                                const response = await import(`../story/${chapter.id}.json`);
                                const data = response.default;
                                const wordCount = data.dataList.reduce(
                                    (acc, curr) => acc + (curr.content?.length || 0),
                                    0
                                );
                                return { ...chapter, wordCount };
                            } catch (error) {
                                console.error(`챕터 ${chapter.id} 데이터 로드 실패:`, error);
                                return { ...chapter, wordCount: 0 };
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