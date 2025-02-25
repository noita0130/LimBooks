import { motion } from 'framer-motion';

const ScriptPage = (darkMode) => {
    const characters = [
        { image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/fortrait/10101_normal_info.png", name: "이상" },
        { image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/fortrait/10201_normal_info.png", name: "파우스트" },
        { image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/fortrait/10301_normal_info.png", name: "돈키호테" },
        { image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/fortrait/10401_normal_info.png", name: "료슈" },
        { image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/fortrait/10501_normal_info.png", name: "뫼르소" },
        { image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/fortrait/10601_normal_info.png", name: "홍루" },
        { image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/fortrait/10701_normal_info.png", name: "히스클리프" },
        { image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/fortrait/10801_normal_info.png", name: "이스마엘" },
        { image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/fortrait/10901_normal_info.png", name: "로쟈" },
        { image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/fortrait/11001_normal_info.png", name: "싱클레어" },
        { image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/fortrait/11101_normal_info.png", name: "오티스" },
        { image: "https://raw.githubusercontent.com/noita0130/LimBooksImg/master/fortrait/11201_normal_info.png", name: "그레고르" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="w-full flex flex-col items-center justify-center p-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            
        >
            <motion.div
                className="grid max-w-[800px] grid-cols-6 grid-rows-2 gap-x-4 gap-y-8 "
            >
                {characters.map((character, index) => (
                    <motion.div
                        key={index}
                        className={`flex flex-col ${darkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-white hover:bg-neutral-300'} 
            rounded-lg shadow-md p-1 items-center cursor-pointer hover:shadow-lg  transition-all duration-200 `}


                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <div className="relative w-full aspect-[2/3] overflow-hidden  rounded-lg mb-1">
                            <img
                                src={character.image}
                                alt={character.name}
                                className="w-full h-full rounded-lg object-cover"
                            />
                        </div>
                        <span className="`mt-2 text-center font-medium mb-1 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`">
                            {character.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default ScriptPage;