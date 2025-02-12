import { motion } from "framer-motion";

const StoryDialog = ({ dataList, darkMode }) => {
    // 이미지 URL인지 확인하는 함수
    const isImageUrl = (str) => {
        return str?.match(/\.(jpeg|jpg|gif|png)$/) != null;
    };

    return (
        <div className="space-y-1 font-dialogs">
            {dataList.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.01 }}
                    className="flex items-start space-x-4"
                >
                    <div className={`w-32 py-2 pl-3 font-size-sm text-right ${darkMode ? 'text-neutral-400' : 'text-black'}`}>
                        {item.teller || item.model}
                    </div>
                    <div className={`flex-1 py-2 pr-3 pl-2 rounded-lg ${darkMode ? 'bg-neutral-800 text-neutral-300' : 'bg-white text-neutral-900'}`}>
                        {/* type 필드가 없거나 text인 경우 텍스트로 처리 */}
                        {(!item.type || item.type === 'text') && (
                            item.content
                        )}
                        {/* type 필드가 image이고, content가 이미지 URL인 경우 이미지로 처리 */}
                        {item.type === 'image' && isImageUrl(item.content) && (
                            <img
                                src={item.content}
                                alt="Story content"
                                className="max-w-full h-auto rounded"
                            />
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default StoryDialog;