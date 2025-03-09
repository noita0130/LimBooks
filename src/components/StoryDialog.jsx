import { motion } from "framer-motion";
import React from "react";

const StoryDialog = ({ dataList, darkMode }) => {
  // 이미지 URL인지 확인하는 함수
  const isImageUrl = (str) => {
    return str?.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

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

  // 리치 텍스트 렌더링 함수
  const renderRichText = (content) => {
    if (!content) return null;

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

  // 내레이션 스타일 (model/teller가 없는 경우)
  const getNarrationStyle = (darkMode) =>
    `flex-1 py-1 mx-4 sm:my-1 md:my-0 md:ml-29 lg:ml-46 italic ${darkMode
      ? 'text-neutral-400'
      : 'text-neutral-600'
    }`;

  // 대화 스타일
  const getDialogStyle = (darkMode) =>
    `flex-1 py-1 pr-3 pl-2 rounded-lg font-normal ${darkMode
      ? 'text-neutral-200'
      : 'text-neutral-800'
    }`;

  // 대화 컨테이너 배경 스타일 (모바일 전용)
  const getMobileContainerStyle = (darkMode) =>
    `md:bg-transparent rounded-lg p-2 md:p-0 ${darkMode
      ? 'bg-neutral-700'
      : 'bg-neutral-200'
    }`;

  return (
    <div className="space-y-1 font-NotoSerifKR mb-6 px-3 md:pr-6 lg:pr-10">
      {dataList?.map((item, index) => (
        <React.Fragment key={index}>
          {/* place 정보가 있고, 이전 아이템과 다르거나 첫 아이템일 때만 표시 */}
          {item.place && (index === 0 || item.place !== dataList[index - 1]?.place) && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.01 }}
              className={`my-4 mx-3 md:ml-22 lg:ml-44 md:mr-4 pt-3 pb-2 max-w-full md:max-w-[600px] ${darkMode
                ? 'text-neutral-400 border-b border-neutral-700'
                : 'text-neutral-700 border-b border-neutral-300'
                }`}
            >
              장소 : {renderRichText(item.place)}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.01 }}
            className={`flex flex-col md:flex-row items-start md:space-x-2 mb-3 md:mb-1
              ${(item.model || item.teller) ? getMobileContainerStyle(darkMode) : ''}`}
          >
            {/* model이나 teller가 있는 경우에만 화자 정보 표시 */}
            {(item.model || item.teller) && (
              <div className={`w-full md:w-25 md:min-w-[100px] lg:w-40 px-2 md:pl-3 md:pr-0 text-left md:text-right whitespace-normal md:whitespace-pre-wrap mb-1 md:mb-0
                ${item.teller
                  ? (item.teller.length > 8 ? 'md:text-sm py-1 md:py-1.5' : 'md:text-base py-0.5 md:py-1')
                  : (item.model.length > 8 ? 'md:text-sm py-1 md:py-1.5' : 'md:text-base py-0.5 md:py-1')
                } ${darkMode ? 'text-neutral-400' : 'text-neutral-700'} font-semibold md:font-normal break-keep`}>
                {renderRichText(item.teller || item.model)}
              </div>
            )}

            {/* 내용 표시 */}
            <div className={`lg:mx-2 md:mx-0 ${item.model || item.teller ? getDialogStyle(darkMode) : getNarrationStyle(darkMode)}`}>
              {(!item.type || item.type === 'text') && renderRichText(item.content)}
              {item.type === 'image' && isImageUrl(item.content) && (
                <img
                  src={item.content}
                  alt="Story content"
                  className="max-w-full h-auto rounded"
                />
              )}
            </div>
          </motion.div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default StoryDialog;