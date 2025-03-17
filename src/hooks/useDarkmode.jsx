import { createContext, useState, useContext, useEffect } from 'react';

// 다크모드 컨텍스트 생성
const DarkModeContext = createContext();

// 다크모드 프로바이더 컴포넌트
export function DarkModeProvider({ children, initialValue = true }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    // 저장된 값이 있으면 그 값을 사용, 없으면 기본값 사용
    return savedDarkMode !== null ? JSON.parse(savedDarkMode) : initialValue;
  });

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export default useDarkMode;