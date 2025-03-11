import React from "react";

// 색상이 밝은지 어두운지 판단하는 함수
export const isLightColorHex = (color) => {
  // '#'으로 시작하면 제거
  const hex = color.charAt(0) === '#' ? color.substring(1) : color;
  
  // RGB 값으로 변환
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // 밝기 계산 (YIQ 방식 사용)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
  // 밝기가 128보다 크면 밝은 색, 작으면 어두운 색으로 판단
  return brightness > 128;
};

// 이미지 URL인지 확인하는 함수
export const isImageUrl = (str) => {
  return str?.match(/\.(jpeg|jpg|gif|png)$/) != null;
};

// 향상된 태그 파싱 함수
export const parseRichTextTags = (text) => {
  if (!text) return [{ text: '', styles: {} }];

  // 텍스트 정리 - 지원하지 않는 태그 제거
  // <size=XX> 태그 제거
  text = text.replace(/<size=[^>]*>([\s\S]*?)<\/size>/g, '$1');
  
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
    // 밝은 색상 텍스트에는 어두운 윤곽선을, 어두운 색상 텍스트에는 밝은 윤곽선을 적용
    const isLightColor = isLightColorHex(textColor);
    // Tailwind neutral 색상 값을 직접 사용
    const outlineColor = isLightColor ? '#404040' : '#d4d4d4'; // neutral-900과 neutral-100에 해당
    
    // 다중 그림자로 모든 방향에 윤곽선 적용 - 더 자연스럽고 선명한 방식
    const textShadow = `
      -1px -1px 1px ${outlineColor},  
      1px -1px 1px ${outlineColor},
      -1px 1px 1px ${outlineColor},
      1px 1px 1px ${outlineColor},
      -1px 0 1px ${outlineColor},
      1px 0 1px ${outlineColor},
      0 -1px 1px ${outlineColor},
      0 1px 1px ${outlineColor}`;
    
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

  // 이탤릭 태그 처리
  const processedParts = [];
  parts.forEach(part => {
    const italicRegex = /<i>([\s\S]*?)<\/i>/g;
    let italicMatch;
    let italicText = part.text;
    let italicLastIndex = 0;
    let hasItalicMatches = false;

    while ((italicMatch = italicRegex.exec(italicText)) !== null) {
      hasItalicMatches = true;
      // 이탤릭 태그 이전 텍스트 추가
      if (italicMatch.index > italicLastIndex) {
        processedParts.push({
          text: italicText.substring(italicLastIndex, italicMatch.index),
          styles: { ...part.styles }
        });
      }

      // 이탤릭 스타일 적용 텍스트 추가
      processedParts.push({
        text: italicMatch[1],
        styles: { ...part.styles, fontStyle: 'italic' }
      });

      italicLastIndex = italicMatch.index + italicMatch[0].length;
    }

    // 처리된 이탤릭이 없거나 남은 텍스트가 있는 경우
    if (!hasItalicMatches || italicLastIndex < italicText.length) {
      if (!hasItalicMatches) {
        processedParts.push(part);
      } else if (italicLastIndex < italicText.length) {
        processedParts.push({
          text: italicText.substring(italicLastIndex),
          styles: { ...part.styles }
        });
      }
    }
  });

  return processedParts.length > 0 ? processedParts : [{ text, styles: {} }];
};

// 리치 텍스트 렌더링 함수
export const renderRichText = (content, field = '알 수 없음') => {
  if (!content) return null;
  
  // content가 문자열인지 확인 (이 부분이 추가됨)
  if (typeof content !== 'string') {
    console.log(`문자열이 아닌 내용이 '${field}' 필드에서 전달됨:`, content);
    console.log('타입:', typeof content);
    // 호출 스택 출력하여 어디서 호출되었는지 확인
    console.trace('호출 위치 추적');
    return String(content); // 문자열이 아닌 경우 문자열로 변환 시도
  }

  // 미지원 태그 정리 (파싱 전에 먼저 처리)
  const cleanedContent = content
    .replace(/<size=[^>]*>([\s\S]*?)<\/size>/g, '$1');  // <size> 태그 제거

  const parts = parseRichTextTags(cleanedContent);
  return parts.map((part, index) => (
    <span
      key={index}
      style={part.styles}
      className="whitespace-pre-wrap break-keep"
    >
      {part.text}
    </span>
  ));
};