// 향상된 태그 파싱 함수
const parseRichTextTags = (text) => {
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

    // 컬러 태그 내용 추가
    parts.push({
      text: colorMatch[2],
      styles: { color: colorMatch[1] }
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

export default parseRichTextTags;