import React from "react";
import { Link } from 'react-router-dom';

const Homepage = React.lazy(() => Promise.resolve({
  default: () => (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-neutral-800">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-red-400">Lim</span>
          <span className="text-white">Books</span>
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
          스토리리더에서 다양한 이야기를 만나보세요.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/main" 
            className="px-6 py-3 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-colors"
          >
            메인 스토리
          </Link>
          <Link 
            to="/mini" 
            className="px-6 py-3 bg-neutral-700 text-white rounded-lg hover:bg-neutral-900 transition-colors"
          >
            미니 스토리
          </Link>
        </div>
      </div>
    </div>
  )
}));

export default Homepage;
