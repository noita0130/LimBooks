import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import personalityList from '../data/personalityList';

const PersonalityPage = ({ darkMode }) => {
    const navigate = useNavigate();

    const handlePersonalityClick = (personalityId) => {
        navigate(`/scripts/${personalityId}`);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center p-12">
            <div className="grid max-w-[800px] grid-cols-6 grid-rows-2 gap-x-4 gap-y-8 ">
                {personalityList.map((character, index) => (
                    <button
                        key={index}
                        onClick={() => handlePersonalityClick(character.id)}
                        className={`flex flex-col ${darkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-neutral-200 hover:bg-neutral-300'} 
                        rounded-lg shadow-md p-1 items-center cursor-pointer hover:shadow-lg
                        transition-transform duration-300 transform hover:scale-105`}
                    >
                        <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg mb-1">
                            <img
                                src={character.image}
                                alt={character.name}
                                className="w-full h-full rounded-lg object-cover"
                            />
                        </div>
                        <span className={`mt-2 text-center font-medium mb-1 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                            {character.name}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PersonalityPage;