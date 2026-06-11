import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import DisplayContext from './context/DisplayContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
        <DisplayContext>
          <App />
        </DisplayContext>
    </BrowserRouter>
  // </StrictMode>,
)
