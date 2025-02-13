import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StoryReaderContent from './pages/StoryReaderContent'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StoryReaderContent />
    </BrowserRouter>
  </StrictMode>,

  
)
