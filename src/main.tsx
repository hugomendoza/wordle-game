import React from 'react'
import ReactDOM from 'react-dom/client'
import WordleApp from './WordleApp.tsx'
import './index.css'
import { GameProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameProvider>
      <WordleApp />
    </GameProvider>
  </React.StrictMode>,
)
