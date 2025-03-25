// components/StoryDialog.jsx (성능 최적화 버전)
import { motion } from "framer-motion";
import React, { memo } from "react";
import { isImageUrl, renderRichText } from "../utill/textUtills";
import useDarkMode from '../hooks/useDarkmode';
import { 
  backgroundTransition, 
  textTransition,
  getTextStyle, 
  getSubTextStyle
} from './TransitionStyles';

// 개별 다이얼로그 아이템 최적화를 위한 memoized 컴포넌트
const DialogItem = memo(({ 
  item, 
  index, 
  darkMode, 
  previousPlace,
  dialogVariants,
  placeVariants,
  getPlaceStyle,
  getDialogStyle,
  getNarrationStyle,
  getMobileContainerStyle,
  getSpeakerStyle
}) => {
  // 장소 변경 여부 확인
  const isNewPlace = item.place && (previousPlace !== item.place);
  
  return (
    <React.Fragment>
      {/* place 정보가 있고, 이전 아이템과 다를 때만 표시 */}
      {isNewPlace && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={placeVariants}
          transition={{ duration: 0.2 }}  // 더 짧은 지연 시간
          className={getPlaceStyle()}
        >
          장소 : {renderRichText(item.place, 'place')}
        </motion.div>
      )}

      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={dialogVariants}
        transition={{ duration: 0.15 }}  // 더 짧은 애니메이션
        className={`flex flex-col md:flex-row items-start md:space-x-2 mb-3 md:mb-1
          ${(item.model || item.teller) ? getMobileContainerStyle() : ''}`}
      >
        {/* model이나 teller가 있는 경우에만 화자 정보 표시 */}
        {(item.model || item.teller) && (
          <div className={getSpeakerStyle(item.teller)}>
            {renderRichText(item.teller || item.model, item.teller ? 'teller' : 'model')}
          </div>
        )}

        {/* 내용 표시 */}
        <div className={`lg:mx-2 md:mx-0 ${item.model || item.teller ? getDialogStyle() : getNarrationStyle()}`}>
          {(!item.type || item.type === 'text') && renderRichText(item.content, 'content')}
          {item.type === 'image' && isImageUrl(item.content) && (
            <img
              src={item.content}
              alt="Story content"
              className="max-w-full h-auto rounded"
              loading="lazy"  // 이미지 지연 로딩 추가
            />
          )}
        </div>
      </motion.div>
    </React.Fragment>
  );
});

const StoryDialog = ({ dataList }) => {
  const { darkMode } = useDarkMode();
  
  // 내레이션 스타일 (model/teller가 없는 경우)
  const getNarrationStyle = () => `flex-1 py-1 mx-4 sm:my-1 md:my-0 md:ml-29 lg:ml-46 text-sm md:text-base italic ${textTransition} ${
    darkMode ? 'text-neutral-400' : 'text-neutral-600'
  }`;

  // 대화 스타일
  const getDialogStyle = () => `flex-1 py-1 pr-3 pl-2 rounded-lg text-sm md:text-base ${textTransition} ${
    darkMode ? 'text-neutral-200' : 'text-neutral-800'
  }`;

  // 대화 컨테이너 배경 스타일 (모바일 전용)
  const getMobileContainerStyle = () => `md:bg-transparent rounded-lg p-2 md:p-0 ${backgroundTransition} ${
    darkMode ? 'bg-neutral-700' : 'bg-neutral-200'
  }`;

  // 장소 스타일
  const getPlaceStyle = () => `my-4 mx-3 md:ml-29 lg:ml-46 md:mr-4 pt-3 pb-2 max-w-full md:max-w-[600px] ${textTransition} ${
    darkMode ? 'text-neutral-400 border-b border-neutral-700' : 'text-neutral-700 border-b border-neutral-300'
  }`;

  // 화자 정보 스타일
  const getSpeakerStyle = (teller) => `w-full md:w-25 md:min-w-[100px] lg:w-40 px-2 md:pl-3 md:pr-0 text-sm md:text-base text-left md:text-right 
    whitespace-normal md:whitespace-pre-wrap mb-1 md:mb-0 ${textTransition}
    ${teller
      ? (teller.length > 8 ? 'md:text-sm py-1 md:py-1.5' : 'md:text-base py-0.5 md:py-1')
      : (teller?.length > 8 ? 'md:text-sm py-1 md:py-1.5' : 'md:text-base py-0.5 md:py-1')
    } ${darkMode ? 'text-neutral-400' : 'text-neutral-700'} font-semibold md:font-normal`;

  // 애니메이션 변형 객체 - 더 작은 이동과 빠른 전환
  const placeVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 }
  };

  const dialogVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 }
  };

  // React.useMemo로 렌더링 최적화
  return (
    <div className="space-y-1 font-NotoSerifKR mb-6 md:px-3 md:pr-6 lg:pr-10">
      {React.useMemo(() => 
        dataList?.map((item, index) => (
          <DialogItem
            key={index}
            item={item}
            index={index}
            darkMode={darkMode}
            previousPlace={index > 0 ? dataList[index - 1]?.place : null}
            dialogVariants={dialogVariants}
            placeVariants={placeVariants}
            getPlaceStyle={getPlaceStyle}
            getDialogStyle={getDialogStyle}
            getNarrationStyle={getNarrationStyle}
            getMobileContainerStyle={getMobileContainerStyle}
            getSpeakerStyle={getSpeakerStyle}
          />
        )), [dataList, darkMode])}
    </div>
  );
};

export default StoryDialog;