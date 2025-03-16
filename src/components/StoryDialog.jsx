import { motion } from "framer-motion";
import React from "react";
import { isImageUrl, renderRichText } from "../utill/textUtills";

const StoryDialog = ({ dataList, darkMode }) => {
  // 내레이션 스타일 (model/teller가 없는 경우)
  const getNarrationStyle = (darkMode) =>
    `flex-1 py-1 mx-4 sm:my-1 md:my-0 md:ml-29 lg:ml-46 text-sm md:text-base italic ${darkMode
      ? 'text-neutral-400'
      : 'text-neutral-600'
    }`;

  // 대화 스타일
  const getDialogStyle = (darkMode) =>
    `flex-1 py-1 pr-3 pl-2 rounded-lg text-sm md:text-base ${darkMode
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
    <div className="space-y-1 font-NotoSerifKR mb-6 md:px-3 md:pr-6 lg:pr-10">
      {dataList?.map((item, index) => (
        <React.Fragment key={index}>
          {/* place 정보가 있고, 이전 아이템과 다르거나 첫 아이템일 때만 표시 */}
          {item.place && (index === 0 || item.place !== dataList[index - 1]?.place) && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.01 }}
              className={`my-4 mx-3 md:ml-29 lg:ml-46 md:mr-4 pt-3 pb-2 max-w-full md:max-w-[600px] ${darkMode
                ? 'text-neutral-400 border-b border-neutral-700'
                : 'text-neutral-700 border-b border-neutral-300'
                }`}
            >
              장소 : {renderRichText(item.place, 'place')}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.02 }}
            className={`flex flex-col md:flex-row items-start md:space-x-2 mb-3 md:mb-1
              ${(item.model || item.teller) ? getMobileContainerStyle(darkMode) : ''}`}
          >
            {/* model이나 teller가 있는 경우에만 화자 정보 표시 */}
            {(item.model || item.teller) && (
              <div className={`w-full md:w-25 md:min-w-[100px] lg:w-40 px-2 md:pl-3 md:pr-0 text-sm md:text-base text-left md:text-right whitespace-normal md:whitespace-pre-wrap mb-1 md:mb-0
                ${item.teller
                  ? (item.teller.length > 8 ? 'md:text-sm py-1 md:py-1.5' : 'md:text-base py-0.5 md:py-1')
                  : (item.model.length > 8 ? 'md:text-sm py-1 md:py-1.5' : 'md:text-base py-0.5 md:py-1')
                } ${darkMode ? 'text-neutral-400' : 'text-neutral-700'} font-semibold md:font-normal `}>
                {renderRichText(item.teller || item.model, item.teller ? 'teller' : 'model')}
              </div>
            )}

            {/* 내용 표시 */}
            <div className={`lg:mx-2 md:mx-0 ${item.model || item.teller ? getDialogStyle(darkMode) : getNarrationStyle(darkMode)}`}>
              {(!item.type || item.type === 'text') && renderRichText(item.content, 'content')}
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