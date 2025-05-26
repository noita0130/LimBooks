import React, { useContext } from "react";
import useDarkMode from "../hooks/useDarkmode";

export const isLightColorHex = (color) => {
  // '#'으로 시작하면 제거
  const hex = color.charAt(0) === '#' ? color.substring(1) : color;
  
  // RGB 값으로 변환
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;
  
  // RGB를 HSL로 변환하여 명도(Lightness) 계산
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2; // 명도
  
  // 명도가 0.5(50%)보다 크면 밝은 색, 작으면 어두운 색으로 판단
  return l > 0.5;
};

// 이미지 URL인지 확인하는 함수
export const isImageUrl = (str) => {
  return str?.match(/\.(jpeg|jpg|gif|png)$/) != null;
};

// 태그 파싱 함수
export const parseRichTextTags = (text, isDarkMode, isMdScreen) => {
  if (!text) return [{ text: '', styles: {} }];

  // 텍스트 정리 - 지원하지 않는 태그 제거
  // <size=XX> 태그 제거
  text = text.replace(/<size=[^>]*>([\s\S]*?)<\/size>/g, '$1');
  // <i> 태그 제거
  text = text.replace(/<i>([\s\S]*?)<\/i>/g, '$1');
  
  // 최종 파싱할 텍스트 준비
  const parts = [];
  let currentText = text;
  let lastIndex = 0;

  // 컬러 태그 처리
  const colorRegex = /<color=(#[0-9A-Fa-f]{6})>([\s\S]*?)<\/color>/g;
  let colorMatch;
  let tempText = text;

  while ((colorMatch = colorRegex.exec(tempText)) !== null) {
    // 태그 이전 텍스트 추가
    if (colorMatch.index > lastIndex) {
      parts.push({
        text: tempText.substring(lastIndex, colorMatch.index),
        styles: {}
      });
    }

    // 컬러 태그 내용 추가 - 색상이 적용된 텍스트에 그림자 효과 추가
    const textColor = colorMatch[1];
    const isLightColor = isLightColorHex(textColor);
    
    // 다크모드와 화면 너비에 따라 그림자 색상 변경
    let outlineColor;
    
    if (isMdScreen) {
      // md 이상
      if (isDarkMode) {
        outlineColor = isLightColor ? '#262626' : '#a3a3a3'; 
      } else {
        outlineColor = isLightColor ? '#000000' : '#d4d4d4'; // 기존 neutral-700과 neutral-400
      }
    } else {
      // 모바일
      if (isDarkMode) {
        outlineColor = isLightColor ? '#404040' : '#a3a3a3'; 
      } else {
        outlineColor = isLightColor ? '#303030' : '#e0e0e0'; 
      }
    }
    
    // 다중 그림자
    const textShadow = `
      -0.5px -0.5px 2px ${outlineColor},  
      0.5px -0.5px 2px ${outlineColor},
      -0.5px 0.5px 2px ${outlineColor},
      0.5px 0.5px 2px ${outlineColor},
      -0.5px 0 2px ${outlineColor},
      0.5px 0 2px ${outlineColor},
      0 -0.5px 2px ${outlineColor},
      0 0.5px 2px ${outlineColor}`;
    
    parts.push({
      text: colorMatch[2],
      styles: { 
        color: textColor,
        textShadow: textShadow,
        // 추가 선명도를 위한 독립 픽셀 렌더링 설정
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }
    });

    lastIndex = colorMatch.index + colorMatch[0].length;
  }

  // 남은 텍스트 추가
  if (lastIndex < tempText.length) {
    parts.push({
      text: tempText.substring(lastIndex),
      styles: {}
    });
  }

  return parts.length > 0 ? parts : [{ text, styles: {} }];
};

// 화면 크기를 감지하는 컴포넌트 (윈도우 크기 체크용)
export const WindowSizeProvider = ({ children }) => {
  const [windowSize, setWindowSize] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 768, // 기본값 설정
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 설정
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return React.createContext(windowSize).Provider;
};

// 리치 텍스트 렌더링 컴포넌트
export const RichText = ({ content, field = '알 수 없음' }) => {
  const { darkMode } = useDarkMode();
  const [windowSize, setWindowSize] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 768
  });
  
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth
      });
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 설정
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isMdScreen = windowSize.width >= 768;
  
  if (!content) return null;
  
  // content가 문자열인지 확인
  if (typeof content !== 'string') {
    console.log(`문자열이 아닌 내용이 '${field}' 필드에서 전달됨:`, content);
    console.log('타입:', typeof content);
    console.trace('호출 위치 추적');
    return String(content); // 문자열이 아닌 경우 문자열로 변환 시도
  }

  // 미지원 태그 정리 (파싱 전에 먼저 처리)
  const cleanedContent = content
    .replace(/<size=[^>]*>([\s\S]*?)<\/size>/g, '$1')  // <size> 태그 제거
    .replace(/<i>([\s\S]*?)<\/i>/g, '$1'); // <i> 태그 제거

  const parts = parseRichTextTags(cleanedContent, darkMode, isMdScreen);
  return (
    <>
      {parts.map((part, index) => (
        <span
          key={index}
          style={part.styles}
          className="whitespace-pre-wrap"
        >
          {part.text}
        </span>
      ))}
    </>
  );
};

// 기존 함수를 유지하되 새로운 컴포넌트를 사용하도록 함
export const renderRichText = (content, field = '알 수 없음') => {
  return <RichText content={content} field={field} />;
};