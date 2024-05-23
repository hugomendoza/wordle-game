import React from 'react'
import ReactDOM from 'react-dom/client'
import WordleApp from './WordleApp.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WordleApp />
  </React.StrictMode>,
)
