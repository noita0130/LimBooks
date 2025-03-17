/**
 * 인격 스토리 데이터를 불러오는 함수
 * @param {string} personalityId - 캐릭터 ID (예: Yisang, Faust 등)
 * @param {string} storyId - 스토리 ID (예: KR_P10101)
 * @returns {Promise<Object>} - 스토리 데이터 객체
 */
const LoadPersonalityStory = async (personalityId, storyId) => {
  try {
    //console.log("인격 스토리 로드 요청:", personalityId, storyId);
    
    // 특별한 스토리 ID 처리 (예: KR_P10710_1 같은 경우 기본 ID로 변환)
    const baseStoryId = storyId.includes('_') && storyId.split('_').length > 3 
      ? storyId.substring(0, storyId.lastIndexOf('_')) 
      : storyId;
    
    // 동적 import
    let response;
    let specificStoryPath = '';
    
    try {
      // 먼저 특별 스토리 경로가 있는지 확인
      try {
        specificStoryPath = `../story/personality/story/${storyId}.json`;
        response = await import(specificStoryPath);
        //console.log("특별 스토리 데이터 임포트 성공:", specificStoryPath);
      } catch (specificError) {
        // 특별 스토리가 없으면 기본 스토리 로드
        response = await import(`../story/personality/story/${baseStoryId}.json`);
        //console.log("기본 스토리 데이터 임포트 성공");
      }
    } catch (importError) {
      //console.error("임포트 오류:", importError);
      throw new Error(`스토리 데이터 파일을 임포트할 수 없습니다: ${storyId}`);
    }
    
    // import 결과에서 default 속성으로 데이터에 접근
    const data = response.default;
    //console.log("스토리 데이터 확인:", data ? "데이터 있음" : "데이터 없음");
    
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
          content: '스토리 데이터를 불러오는데 문제가 발생했습니다. 오류: ' + error.message,
          place: null,
          type: 'text'
        }
      ],
      personalityId: personalityId
    };
  }
};

export default LoadPersonalityStory;