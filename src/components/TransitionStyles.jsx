// styles/TransitionStyles.jsx

/**
 * 다크 모드 전환 애니메이션을 위한 공통 스타일 클래스 모음
 * 앱 전체에서 일관된 다크 모드 전환을 구현하기 위해 사용
 */

// 배경 전환 스타일 - 페이지 배경에는 좀 더 긴 시간 적용
export const backgroundTransition = "transition-colors duration-200 ease-in-out";

// 텍스트 전환 스타일 - 빠른 전환 필요
export const textTransition = "transition-colors duration-150 ease-in-out";

// 테두리 전환 스타일
export const borderTransition = "transition-colors duration-150 ease-in-out";

// 버튼 전환 스타일 (배경 + 텍스트) - 버튼은 빠른 피드백 필요
export const buttonTransition = "transition-all duration-150 ease-in-out";

// 카드 전환 스타일 (배경 + 테두리 + 그림자)
export const cardTransition = "transition-all duration-200 ease-in-out";

// 다크 모드를 위한 배경 컬러 스타일 (배경 전환 포함)
export const getBgStyle = (darkMode) => `${backgroundTransition} ${
  darkMode ? 'bg-neutral-800' : 'bg-white'
}`;

// 다크 모드를 위한 페이지 배경 스타일
export const getPageBgStyle = (darkMode) => `${backgroundTransition} ${
  darkMode ? 'bg-neutral-900' : 'bg-neutral-50'
}`;

// 다크 모드를 위한 텍스트 컬러 스타일
export const getTextStyle = (darkMode) => `${textTransition} ${
  darkMode ? 'text-neutral-200' : 'text-neutral-800'
}`;

// 다크 모드를 위한 보조 텍스트 컬러 스타일
export const getSubTextStyle = (darkMode) => `${textTransition} ${
  darkMode ? 'text-neutral-400' : 'text-neutral-600'
}`;

// 다크 모드를 위한 버튼 스타일
export const getButtonStyle = (darkMode) => `${buttonTransition} ${
  darkMode 
    ? 'bg-neutral-700 hover:bg-neutral-600 text-neutral-200' 
    : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-800'
}`;

// 다크 모드를 위한 카드 스타일
export const getCardStyle = (darkMode) => `${cardTransition} ${
  darkMode 
    ? 'bg-neutral-800 border-neutral-700 shadow-dark' 
    : 'bg-white border-neutral-200 shadow'
}`;

// 모든 다크 모드 전환 스타일을 하나의 객체로 내보내기
export const transitionStyles = {
  backgroundTransition,
  textTransition,
  borderTransition,
  buttonTransition,
  cardTransition,
  getBgStyle,
  getPageBgStyle,
  getTextStyle,
  getSubTextStyle,
  getButtonStyle,
  getCardStyle
};

export default transitionStyles;