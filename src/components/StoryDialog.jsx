import { motion } from "framer-motion";
import React from "react";

const StoryDialog = ({ dataList, darkMode }) => {
    // 이미지 URL인지 확인하는 함수
    const isImageUrl = (str) => {
        return str?.match(/\.(jpeg|jpg|gif|png)$/) != null;
    };

    // 내레이션 스타일 (model/teller가 없는 경우)
    const getNarrationStyle = (darkMode) => 
        `flex-1 py-2 ml-36 italic ${
            darkMode 
                ? 'text-neutral-400' 
                : 'text-neutral-600'
        }`;

    // 대화 스타일
    const getDialogStyle = (darkMode) =>
        `flex-1 py-2 pr-3 pl-2 rounded-lg ${
            darkMode 
                ? 'bg-neutral-800 text-neutral-300' 
                : 'bg-white text-neutral-900'
        }`;

    return (
        <div className="space-y-1 font-medium font-dialogs">
            {dataList.map((item, index) => (
                <React.Fragment key={index}>
                    {/* place 정보가 있고, 이전 아이템과 다르거나 첫 아이템일 때만 표시 */}
                    {item.place && (index === 0 || item.place !== dataList[index - 1]?.place) && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`my-4 pt-3 pb-2  ml-24 mr-24 ${
                                darkMode 
                                    ? 'text-neutral-400 border-b border-neutral-700' 
                                    : 'text-neutral-600 border-b border-neutral-200'
                            }`}
                        >
                            장소 : {item.place}
                        </motion.div>
                    )}
                    
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.01 }}
                        className={`flex items-start ${!item.model && !item.teller ? '' : 'space-x-4'}`}
                    >
                        {/* model이나 teller가 있는 경우에만 화자 정보 표시 */}
                        {(item.model || item.teller) && (
                            <div className={`w-32 py-2 pl-3 font-size-sm text-right ${
                                darkMode ? 'text-neutral-400' : 'text-black'
                            }`}>
                                {item.teller || item.model}
                            </div>
                        )}
                        
                        {/* 내용 표시 */}
                        <div className={item.model || item.teller ? getDialogStyle(darkMode) : getNarrationStyle(darkMode)}>
                            {(!item.type || item.type === 'text') && item.content}
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