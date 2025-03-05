/**
 * 인격 대사집 데이터를 불러오는 함수
 * @param {string} personalityId - 캐릭터 ID (예: Yisang, Faust 등)
 * @param {string} storyId - 스토리 ID (예: KR_P10101)
 * @returns {Promise<Object>} - 대사집 데이터 객체
 */
const LoadPersonalityVoice = async (personalityId, storyId) => {
  try {
    console.log("인격 대사집 로드 요청:", personalityId, storyId);
    
    // 동적 import 사용 (loadChapterData와 유사한 방식)
    let response;
    
    try {
      response = await import(`../story/personality/voice/${storyId}.json`);
      console.log("대사집 데이터 임포트 성공");
    } catch (importError) {
      console.error("임포트 오류:", importError);
      throw new Error(`대사집 데이터 파일을 임포트할 수 없습니다: ${storyId}`);
    }
    
    // import 결과에서 default 속성으로 데이터에 접근
    const data = response.default;
    console.log("대사집 데이터 확인:", data ? "데이터 있음" : "데이터 없음");
    
    // 카테고리 분류가 없는 경우 기본 카테고리 추가
    const quotes = data.quotes?.map(quote => ({
      ...quote,
      category: quote.category || '일반 대사'
    })) || [];
    
    return {
      id: storyId,
      title: data.title || '제목 없음',
      quotes: quotes,
      personalityId: personalityId
    };
  } catch (error) {
    console.error('대사집 데이터 로딩 오류:', error);
    // 오류 시 기본 데이터 반환
    return {
      id: storyId,
      title: '데이터 로드 실패',
      quotes: [
        {
          situation: '오류 발생',
          text: '대사집 데이터를 불러오는데 문제가 발생했습니다. 오류: ' + error.message,
          category: '시스템'
        }
      ],
      personalityId: personalityId
    };
  }
};

export default LoadPersonalityVoice;