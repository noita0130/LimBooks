import { motion } from "framer-motion";
import React from "react";

const StoryDialog = ({ dataList, darkMode }) => {
  // 이미지 URL인지 확인하는 함수
  const isImageUrl = (str) => {
    return str?.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

  // color 태그 파싱 함수
  const parseColorTags = (text) => {
    if (!text) return [{ text: '', color: null }];

    // <color=#hexcode>text</color> 패턴 매칭
    const colorRegex = /<color=(#[0-9A-Fa-f]{6})>([\s\S]*?)<\/color>/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = colorRegex.exec(text)) !== null) {
      console.log("Found match:", match);

      // 태그 이전 텍스트 추가
      if (match.index > lastIndex) {
        parts.push({
          text: text.substring(lastIndex, match.index),
          color: null
        });
      }

      // 컬러 태그 내용 추가
      parts.push({
        text: match[2],
        color: match[1]
      });

      lastIndex = match.index + match[0].length;
    }

    // 남은 텍스트 추가
    if (lastIndex < text.length) {
      parts.push({
        text: text.substring(lastIndex),
        color: null
      });
    }

    return parts.length > 0 ? parts : [{ text, color: null }];
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

  // 컨텐츠 렌더링 함수
  const renderContent = (content) => {
    if (!content) return null;

    const parts = parseColorTags(content);
    return parts.map((part, index) => (
      <span
        key={index}
        style={part.color ? { color: part.color } : undefined}
        className="whitespace-pre-wrap break-keep"
      >
        {part.text}
      </span>
    ));
  };

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
              장소 : {item.place}
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
                  ? (item.teller.length > 8 ? 'text-sm py-1 md:py-1.5' : 'text-base py-0.5 md:py-1')
                  : (item.model.length > 8 ? 'text-sm py-1 md:py-1.5' : 'text-base py-0.5 md:py-1')
                } ${darkMode ? 'text-neutral-400' : 'text-neutral-700'} font-semibold md:font-normal break-keep`}>
                {item.teller || item.model}
              </div>
            )}

            {/* 내용 표시 */}
            <div className={`lg:mx-2 md:mx-0 ${item.model || item.teller ? getDialogStyle(darkMode) : getNarrationStyle(darkMode)}`}>
              {(!item.type || item.type === 'text') && renderContent(item.content)}
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