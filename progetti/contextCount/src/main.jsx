import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Routing
import { BrowserRouter } from "react-router";

// Store
import { CounterProvider } from './stores/CounterContex';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CounterProvider>
        <App />
      </CounterProvider>
    </BrowserRouter>
  </StrictMode>,
)
