/**
 * 인격 스토리 데이터를 불러오는 함수
 * @param {string} personalityId - 캐릭터 ID (예: Yisang, Faust 등)
 * @param {string} storyId - 스토리 ID (예: KR_P10101)
 * @returns {Promise<Object>} - 스토리 데이터 객체
 */
const LoadPersonalityStory = async (personalityId, storyId) => {
  try {
    console.log("인격 스토리 로드 요청:", personalityId, storyId);
    
    // 동적 import 사용
    const storyModule = await import(`../story/personality/story/${storyId}.json`);
    console.log("스토리 모듈 로드 성공");
    
    // import된 데이터 가져오기
    const data = storyModule.default;
    console.log("스토리 데이터 확인:", data ? "데이터 있음" : "데이터 없음");
    
    // dataList 형태인 경우 (제공된 KR_P10102.json 형식)
    if (data.dataList) {
      // 첫 번째 항목에서 title을 가져옴 (있는 경우)
      const title = data.dataList.length > 0 && data.dataList[0].title 
        ? data.dataList[0].title 
        : '제목 없음';
      
      // StoryDialog 컴포넌트와 호환되는 형태로 변환
      return {
        id: storyId,
        title: title,
        // dataList를 dialogues 형태로 변환할 필요 없음 (이미 호환됨)
        dataList: data.dataList,
        personalityId: personalityId
      };
    } 
    // dialogues 형태인 경우 (기존 형식)
    else if (data.dialogues) {
      return {
        id: storyId,
        title: data.title || '제목 없음',
        dataList: data.dialogues.map(dialogue => ({
          model: dialogue.speaker || null,
          teller: dialogue.narrator || null,
          content: dialogue.text || '',
          place: dialogue.location || null,
          type: dialogue.type || 'text'
        })),
        personalityId: personalityId
      };
    }
    // 다른 형태인 경우
    else {
      throw new Error('알 수 없는 데이터 형식입니다.');
    }
  } catch (error) {
    console.error('스토리 데이터 로딩 오류:', error);
    // 오류 시 기본 데이터 반환
    return {
      id: storyId,
      title: '데이터 로드 실패',
      dataList: [
        {
          model: null,
          teller: '시스템',
          content: '스토리 데이터를 불러오는데 문제가 발생했습니다.',
          place: null,
          type: 'text'
        }
      ],
      personalityId: personalityId
    };
  }
};

export default LoadPersonalityStory;