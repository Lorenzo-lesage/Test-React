import { useState } from 'react'

// Components
import { Home } from './pages/Home';

// Context
import { ThemeProvider } from './context/ThemeProvider';

function App() {

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
