/**
 * 아나운서 대사집 데이터를 불러오는 함수
 * @param {string} announcerId - 아나운서 ID (예: Aengdu_26)
 * @returns {Promise<Object>} - 대사집 데이터 객체
 */
const LoadAnnouncer = async (announcerId) => {
    try {
      //console.log("아나운서 대사집 로드 요청:", announcerId);
      
      // 동적 import 사용
      let response;
      
      try {
        response = await import(`../story/announcer/${announcerId}.json`);
        //console.log("대사집 데이터 임포트 성공");
      } catch (importError) {
        console.error("임포트 오류:", importError);
        throw new Error(`대사집 데이터 파일을 임포트할 수 없습니다: ${announcerId}`);
      }
      
      // import 결과에서 default 속성으로 데이터에 접근
      const data = response.default;
      //console.log("대사집 데이터 확인:", data ? "데이터 있음" : "데이터 없음");
      
      // dataList 형식의 데이터를 quotes 형식으로 변환
      if (data.dataList && Array.isArray(data.dataList)) {
        // dataList 배열을 quotes 형식으로 변환
        const quotes = data.dataList.map(item => ({
          id: item.id,
          situation: item.desc || '상황 없음',
          text: item.dlg || '',
          category: item.desc ? item.desc.split(' ')[0] || '일반' : '일반' // desc의 첫 단어를 카테고리로 사용
        }));
        
        return {
          id: announcerId,
          title: data.title || announcerId,
          quotes: quotes
        };
      }
      
      // 기존 quotes 형식 처리 (호환성 유지)
      const quotes = data.quotes?.map(quote => ({
        ...quote,
        category: quote.category || '일반 대사'
      })) || [];
      
      return {
        id: announcerId,
        title: data.title || announcerId,
        quotes: quotes
      };
    } catch (error) {
      console.error('대사집 데이터 로딩 오류:', error);
      // 오류 시 기본 데이터 반환
      return {
        id: announcerId,
        title: '데이터 로드 실패',
        quotes: [
          {
            id: 'error',
            situation: '오류 발생',
            text: '대사집 데이터를 불러오는데 문제가 발생했습니다. 오류: ' + error.message,
            category: '시스템'
          }
        ]
      };
    }
  };
  
  export default LoadAnnouncer;