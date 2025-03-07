import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StoryReaderContent from './pages/StoryReaderContent'
import { BrowserRouter } from 'react-router-dom'

// 우클릭 활성화를 위한 이벤트 리스너
document.addEventListener('contextmenu', (e) => true);

// 휠 스크롤 활성화를 위한 이벤트 리스너
document.addEventListener('wheel', (e) => true, { passive: true });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/LimBooks">
      <StoryReaderContent />
    </BrowserRouter>
  </StrictMode>,
)