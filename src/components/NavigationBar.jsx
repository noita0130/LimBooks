import { Home, Book, BookOpen, Moon, Sun, MessageCircle } from "lucide-react";

const NavigationBar = ({ darkMode, toggleDarkMode, handleNavigation, location }) => {
    return (
      <nav className={`${darkMode ? 'bg-neutral-800' : 'bg-white'} shadow-lg transition-200`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center ml-4 space-x-8">
              <div className="flex-shrink-0 font-bold text-xl">
                <span className="text-red-400">Lim</span>
                <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Books</span>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    console.log('Navigating to home');
                    handleNavigation('/');
                  }}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                    ${location.pathname === '/' ? 
                      (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white') :
                      (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`}
                >
                  <Home className="w-4 h-4 mr-2" />
                  홈
                </button>
                <button
                  onClick={() => {
                    console.log('Navigating to main stories');
                    handleNavigation('/main');
                  }}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                    ${location.pathname.startsWith('/main') ? 
                      (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white') :
                      (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`}
                >
                  <Book className="w-4 h-4 mr-2" />
                  메인
                </button>
                <button
                  onClick={() => {
                    console.log('Navigating to mini stories');
                    handleNavigation('/mini');
                  }}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                    ${location.pathname.startsWith('/mini') ? 
                      (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white') :
                      (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  미니
                </button>
                <button
                  onClick={() => {
                    console.log('Navigating to scripts');
                    handleNavigation('/scripts');
                  }}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                    ${location.pathname.startsWith('/scripts') ? 
                      (darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-white') :
                      (darkMode ? 'text-neutral-300 hover:bg-neutral-700' : 'text-neutral-700 hover:bg-neutral-200')}`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  대사집(WIP)
                </button>
              </div>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavigationBar;