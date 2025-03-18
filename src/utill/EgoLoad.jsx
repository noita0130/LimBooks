
// egoLoad.js - EGO 데이터를 로드하는 유틸리티 함수
import egoData from '../data/egoData';
import personalityList from '../data/personalityList';

/**
 * 특정 인격체의 EGO 데이터를 로드하는 함수
 * @param {string} personalityId - 인격체 ID (예: 'Yisang', 'Faust' 등)
 * @returns {Object} - {egoList, personalityInfo} 형태의 객체
 *   - egoList: 해당 인격체의 EGO 데이터 배열
 *   - personalityInfo: 인격체 기본 정보 객체
 */
const EgoLoad = (personalityId) => {
  // 인격체 정보 가져오기
  const personalityInfo = personalityList.find(char => char.id === personalityId) || null;
  
  // EGO 데이터 가져오기
  const egoList = egoData[personalityId] || [];
  
  // 데이터 정렬 (출시순 - ID 기준)
  const sortedEgoList = [...egoList].sort((a, b) => {
    const numA = parseInt(a.id.replace('KR_', ''));
    const numB = parseInt(b.id.replace('KR_', ''));
    return numA - numB;
  });
  
  return {
    egoList: sortedEgoList,
    personalityInfo
  };
};

export default EgoLoad;