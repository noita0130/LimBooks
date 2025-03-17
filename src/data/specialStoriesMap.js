/**
 * 특별한 인격 ID에 대해 연관된 다중 스토리 ID를 매핑하는 객체
 * 서브 ID도 직접 맵에 등록하여 확실하게 처리
 */
const specialStoriesMap = {
  // 와일드헌트 스토리 - 기본 ID
  "KR_P10710": {
    title: "와일드헌트",
    baseId: "KR_P10710",  // 기본 ID 참조
    stories: [
      {
        id: "KR_P10710",
        title: "6장 클리어 이전",
      },
      {
        id: "KR_P10710_A",
        title: "6장 클리어 이후",
      }
    ]
  },
  
  // 와일드헌트 서브 스토리 - 서브 ID를 별도로 등록
  "KR_P10710_A": {
    title: "와일드헌트",
    baseId: "KR_P10710",  // 기본 ID 참조
    stories: [
      {
        id: "KR_P10710",
        title: "6장 클리어 이전",
      },
      {
        id: "KR_P10710_A",
        title: "6장 클리어 이후",
      }
    ]
  },
  
  // 필요에 따라 다른 특별 케이스 추가 가능
};

/**
 * 주어진 ID가 특별한 다중 스토리를 가진 ID인지 확인하는 함수
 * @param {string} id - 확인할 인격 또는 스토리 ID
 * @returns {boolean} - 특별한 다중 스토리를 가진 ID인지 여부
 */
export const isSpecialStoryId = (id) => {
  return Object.keys(specialStoriesMap).includes(id);
};

/**
 * 특별한 ID에 대한 스토리 정보를 가져오는 함수
 * @param {string} id - 특별한 인격 또는 스토리 ID
 * @returns {object|null} - 해당 ID에 대한 스토리 정보 또는 null
 */
export const getSpecialStoryInfo = (id) => {
  return specialStoriesMap[id] || null;
};

/**
 * 특별한 스토리 ID의 기본 ID를 가져오는 함수
 * @param {string} id - 특별한 스토리 ID (예: KR_P10710_A)
 * @returns {string} - 기본 ID (예: KR_P10710)
 */
export const getBaseStoryId = (id) => {
  if (specialStoriesMap[id] && specialStoriesMap[id].baseId) {
    return specialStoriesMap[id].baseId;
  }
  return id;
};

/**
 * 특별한 스토리의 메인 제목을 가져오는 함수 (스토리 맵에 설정된 주 제목)
 * @param {string} id - 특별한 스토리 ID
 * @returns {string|null} - 해당 ID의 메인 스토리 제목 또는 null
 */
export const getSpecialStoryMainTitle = (id) => {
  const storyInfo = specialStoriesMap[id];
  return storyInfo ? storyInfo.title : null;
};

/**
 * 특별한 스토리의 서브 제목을 가져오는 함수 (스토리 목록에 있는 개별 스토리 제목)
 * @param {string} id - 특별한 스토리 ID
 * @returns {string|null} - 해당 ID의 개별 스토리 제목 또는 null
 */
export const getSpecialStorySubTitle = (id) => {
  const storyInfo = specialStoriesMap[id];
  
  if (!storyInfo) return null;
  
  const story = storyInfo.stories.find(s => s.id === id);
  return story ? story.title : null;
};

export default specialStoriesMap;