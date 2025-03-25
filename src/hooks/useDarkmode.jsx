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
      document.body.style.backgroundColor = '#171717'; // neutral-900
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f9fafb'; // neutral-50
    }
    
    // 트랜지션 효과 추가 (페이지 처음 로드 시에는 적용하지 않음)
    const addTransition = () => {
      document.documentElement.classList.add('transition-colors');
      document.documentElement.classList.add('duration-300');
      document.body.classList.add('transition-colors');
      document.body.classList.add('duration-300');
    };
    
    // 페이지 로드 후 잠시 후 트랜지션 클래스 추가
    const timer = setTimeout(addTransition, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, [darkMode]);

  // OS 테마 변경 감지
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // 사용자가 직접 설정하지 않은 경우에만 OS 설정 따르기
      if (localStorage.getItem('userSetDarkMode') !== 'true') {
        setDarkMode(e.matches);
      }
    };
    
    // 미디어 쿼리 변경 감지 리스너 추가 (브라우저 호환성 고려)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Safari 및 이전 브라우저용 대체 메서드
      mediaQuery.addListener(handleChange);
    }
    
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

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