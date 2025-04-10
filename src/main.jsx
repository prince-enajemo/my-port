import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import experience from './home-components/experience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* { Element: <experience/> , path: "/experience"}; */}
  </StrictMode>,
)
