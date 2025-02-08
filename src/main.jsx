import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StoryReader from './StoryReader'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoryReader />
  </StrictMode>,
)
