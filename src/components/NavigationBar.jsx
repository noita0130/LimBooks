import { Home, Book, BookOpen, Moon, Sun, MessageCircle, ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const NavigationBar = ({ darkMode, toggleDarkMode, handleNavigation, location }) => {
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

  return (
    <nav className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} shadow-lg `}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex-shrink-0 font-bold text-xl">
            <span className="text-red-400">Lim</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Books</span>
            <span className="text-xs ml-1 text-neutral-500">(Beta)</span>
          </div>

          {/* 데스크탑 메뉴 - 왼쪽 정렬 */}
          <div className="hidden md:flex md:flex-1 md:space-x-4 md:items-center md:ml-8">
            <button
              onClick={() => handleNavigation('/')}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                ${location.pathname === '/' ?
                  (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white') :
                  (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`}
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
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                  ${(location.pathname.startsWith('/main') || location.pathname.startsWith('/mini')) ?
                    (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white') :
                    (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`}
              >
                <Book className="w-4 h-4 mr-2" />
                스토리
                <ChevronDown
                  className={`w-3 h-3 ml-1 transform transition-transform duration-300 ease-in-out ${isStoryMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* 드롭다운 메뉴 */}
              <div
                className={`absolute left-0 top-full mt-1 w-[106px] rounded-md shadow-lg z-10 overflow-hidden
                  transition-all duration-300 ease-in-out origin-top 
                  ${isStoryMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
                  ${darkMode ? 'bg-neutral-700' : 'bg-white'}`}
              >
                <div>
                  <button
                    onClick={() => handleNavigation('/main')}
                    className={`block w-full text-left px-4 py-2 text-sm
                      ${location.pathname.startsWith('/main') ?
                        (darkMode ? 'bg-neutral-600 text-white' : 'bg-neutral-200 text-neutral-900') :
                        (darkMode ? 'text-neutral-200 hover:bg-neutral-600' : 'text-neutral-700 hover:bg-neutral-100')}`}
                  >
                    <div className="flex items-center">
                      <Book className="w-4 h-4 mr-2" />
                      메인
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavigation('/mini')}
                    className={`block w-full text-left px-4 py-2 text-sm
                      ${location.pathname.startsWith('/mini') ?
                        (darkMode ? 'bg-neutral-600 text-white' : 'bg-neutral-200 text-neutral-900') :
                        (darkMode ? 'text-neutral-200 hover:bg-neutral-600' : 'text-neutral-700 hover:bg-neutral-100')}`}
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
              onClick={() => handleNavigation('/personality')}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                ${location.pathname.startsWith('/personality') ?
                  (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white') :
                  (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              인격
            </button>

            <button
              onClick={() => handleNavigation('/announcers')}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                ${location.pathname.startsWith('/announcers') ?
                  (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white') :
                  (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              아나운서
            </button>
          </div>

          {/* 다크모드 버튼 */}
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* 모바일 햄버거 버튼 - 오른쪽 정렬 */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden ml-2 p-2 rounded-md ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}
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
        className={`md:hidden overflow-hidden ${darkMode ? 'bg-neutral-800' : 'bg-white'} border-t ${darkMode ? 'border-neutral-700' : 'border-neutral-200'}`}
        style={{
          maxHeight: isMobileMenuOpen ? '24rem' : '0', // 96px = 24rem (max-h-96)
          opacity: isMobileMenuOpen ? '1' : '0',
          transition: 'max-height 300ms ease-in-out, opacity 300ms ease-in-out'
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button
            onClick={() => handleMobileNavigation('/')}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium
              ${location.pathname === '/' ?
                (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white') :
                (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`}
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
            className={`block w-full text-left pl-11 py-2 rounded-md text-base font-medium
              ${location.pathname.startsWith('/main') ?
                (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white') :
                (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`}
          >
            <div className="flex items-center">
              <Book className="w-4 h-4 mr-2" />
              메인
            </div>
          </button>

          <button
            onClick={() => handleMobileNavigation('/mini')}
            className={`block w-full text-left pl-11 py-2 rounded-md text-base font-medium
              ${location.pathname.startsWith('/mini') ?
                (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white') :
                (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`}
          >
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              미니
            </div>
          </button>

          <button
            onClick={() => handleMobileNavigation('/personality')}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium
              ${location.pathname.startsWith('/personality') ?
                (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white') :
                (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`}
          >
            <div className="flex items-center">
              <MessageCircle className="w-5 h-5 mr-3" />
              인격
            </div>
          </button>

          <button
            onClick={() => handleMobileNavigation('/announcers')}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium
              ${location.pathname.startsWith('/announcers') ?
                (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white') :
                (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`}
          >
            <div className="flex items-center">
              <MessageCircle className="w-5 h-5 mr-3" />
              아나운서
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;