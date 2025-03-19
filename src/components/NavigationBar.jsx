// components/NavigationBar.jsx (개선된 버전)
import { Home, Book, BookOpen, Moon, Sun, MessageCircle, ChevronDown, Menu, Mic, X, UserRound } from "lucide-react";
import { useState, useEffect } from "react";
import useDarkMode from '../hooks/useDarkmode';
import { 
  backgroundTransition, 
  textTransition, 
  buttonTransition,
  getBgStyle,
  getButtonStyle,
  getTextStyle,
  getSubTextStyle
} from './TransitionStyles';

const NavigationBar = ({ handleNavigation, location }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isStoryMenuOpen, setIsStoryMenuOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleStoryHover = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsStoryMenuOpen(true);
  };

  const handleStoryLeave = () => {
    const timeout = setTimeout(() => {
      setIsStoryMenuOpen(false);
    }, 150); // 150ms 딜레이로 실수로 닫히는 것 방지
    setCloseTimeout(timeout);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 모바일 메뉴 닫기
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // 모바일 네비게이션 처리
  const handleMobileNavigation = (path) => {
    handleNavigation(path);
    closeMobileMenu();
  };

  // 컴포넌트 언마운트 시 타임아웃 정리
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  // 네비게이션 버튼 스타일 계산 함수
  const getNavButtonStyle = (isActive) => {
    return `flex items-center px-3 py-2 rounded-md text-sm font-medium ${buttonTransition}
      ${isActive
          ? (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white')
          : (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`;
  };

  // 드롭다운 메뉴 스타일 계산 함수
  const getDropdownMenuStyle = (isOpen) => {
    return `absolute left-0 top-full mt-1 w-[106px] rounded-md shadow-lg z-10 overflow-hidden
      transition-all duration-300 ease-in-out origin-top 
      ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
      ${darkMode ? 'bg-neutral-700' : 'bg-white'}`;
  };

  // 드롭다운 항목 스타일 계산 함수
  const getDropdownItemStyle = (isActive) => {
    return `block w-full text-left px-4 py-2 text-sm ${buttonTransition}
      ${isActive
          ? (darkMode ? 'bg-neutral-600 text-white' : 'bg-neutral-200 text-neutral-900')
          : (darkMode ? 'text-neutral-200 hover:bg-neutral-600' : 'text-neutral-700 hover:bg-neutral-100')}`;
  };

  // 모바일 메뉴 항목 스타일 계산 함수
  const getMobileItemStyle = (isActive) => {
    return `block w-full text-left px-3 py-2 rounded-md text-base font-medium ${buttonTransition}
      ${isActive
          ? (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white')
          : (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`;
  };

  return (
    <nav className={`${getBgStyle(darkMode)} shadow-lg ${backgroundTransition}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex-shrink-0 font-bold text-xl">
            <span className="text-red-400">Lim</span>
            <span className={`${getTextStyle(darkMode)}`}>Books</span>
            <span className={`text-xs ml-1 ${getSubTextStyle(darkMode)}`}>(Beta)</span>
          </div>

          {/* 데스크탑 메뉴 - 왼쪽 정렬 */}
          <div className="hidden md:flex md:flex-1 md:space-x-4 md:items-center md:ml-8">
            <button
              onClick={() => handleNavigation('/')}
              className={getNavButtonStyle(location.pathname === '/')}
            >
              <Home className="w-4 h-4 mr-2" />
              홈
            </button>

            {/* Story 드롭다운 버튼 */}
            <div
              className="relative"
              onMouseEnter={handleStoryHover}
              onMouseLeave={handleStoryLeave}
            >
              <button
                className={getNavButtonStyle(location.pathname.startsWith('/main') || location.pathname.startsWith('/mini'))}
              >
                <Book className="w-4 h-4 mr-2" />
                스토리
                <ChevronDown
                  className={`w-3 h-3 ml-1 transform transition-transform duration-300 ease-in-out ${isStoryMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* 드롭다운 메뉴 */}
              <div className={getDropdownMenuStyle(isStoryMenuOpen)}>
                <div>
                  <button
                    onClick={() => handleNavigation('/main')}
                    className={getDropdownItemStyle(location.pathname.startsWith('/main'))}
                  >
                    <div className="flex items-center">
                      <Book className="w-4 h-4 mr-2" />
                      메인
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavigation('/mini')}
                    className={getDropdownItemStyle(location.pathname.startsWith('/mini'))}
                  >
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      미니
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleNavigation('/sinner')}
              className={getNavButtonStyle(location.pathname.startsWith('/sinner'))}
            >
              <UserRound className="w-4 h-4 mr-2" />
              수감자
            </button>

            <button
              onClick={() => handleNavigation('/announcers')}
              className={getNavButtonStyle(location.pathname.startsWith('/announcers'))}
            >
              <Mic className="w-4 h-4 mr-2" />
              아나운서
            </button>
          </div>

          {/* 다크모드 버튼 */}
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md ${buttonTransition} ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}
              aria-label={darkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* 모바일 햄버거 버튼 - 오른쪽 정렬 */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden ml-2 p-2 rounded-md ${buttonTransition} ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}
              aria-label="모바일 메뉴"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <Menu className={`w-5 h-5 absolute transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                <X className={`w-5 h-5 absolute transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`md:hidden overflow-hidden ${getBgStyle(darkMode)} border-t ${darkMode ? 'border-neutral-700' : 'border-neutral-200'}`}
        style={{
          maxHeight: isMobileMenuOpen ? '24rem' : '0', // 96px = 24rem (max-h-96)
          opacity: isMobileMenuOpen ? '1' : '0',
          transition: 'max-height 300ms ease-in-out, opacity 300ms ease-in-out'
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button
            onClick={() => handleMobileNavigation('/')}
            className={getMobileItemStyle(location.pathname === '/')}
          >
            <div className="flex items-center">
              <Home className="w-5 h-5 mr-3" />
              홈
            </div>
          </button>

          {/* 모바일 스토리 메뉴 - 드롭다운 없이 바로 표시 */}
          <div className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium
            ${(location.pathname.startsWith('/main') || location.pathname.startsWith('/mini')) ?
              (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-200 text-neutral-900') :
              (darkMode ? 'text-neutral-400' : 'text-neutral-600')}`}
          >
            <div className="flex items-center">
              <Book className="w-5 h-5 mr-3" />
              스토리
            </div>
          </div>

          <button
            onClick={() => handleMobileNavigation('/main')}
            className={getMobileItemStyle(location.pathname.startsWith('/main'))}
          >
            <div className="flex items-center">
              <Book className="w-4 h-4 mr-2 ml-8" />
              메인
            </div>
          </button>

          <button
            onClick={() => handleMobileNavigation('/mini')}
            className={getMobileItemStyle(location.pathname.startsWith('/mini'))}
          >
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2 ml-8" />
              미니
            </div>
          </button>

          <button
            onClick={() => handleMobileNavigation('/sinner')}
            className={getMobileItemStyle(location.pathname.startsWith('/sinner'))}
          >
            <div className="flex items-center">
              <UserRound className="w-5 h-5 mr-3" />
              수감자
            </div>
          </button>

          <button
            onClick={() => handleMobileNavigation('/announcers')}
            className={getMobileItemStyle(location.pathname.startsWith('/announcers'))}
          >
            <div className="flex items-center">
              <Mic className="w-5 h-5 mr-3" />
              아나운서
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;