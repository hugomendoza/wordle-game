/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useWordleGameStore } from '../store'
import { Header } from '../components'
import { preferColorSchema } from '../helpers'

interface GameLayoutProps {
  children: JSX.Element | JSX.Element[]
}

export const GameLayout = ({children}: GameLayoutProps) => {
  const darkMode = useWordleGameStore((state) => state.darkMode)
  const onDarkMode = useWordleGameStore((state) => state.handleDarkMode)

  useEffect(() => {
    onDarkMode(preferColorSchema.matches);
  }, [])
  
  return (
    <main
      className={`w-full min-h-screen ${darkMode && 'dark'} bg-white dark:bg-slate-800`}
    >
      <div className="w-[min(90%,40rem)] mx-auto py-24">
        <Header />
        {children}
      </div>
    </main>
  )
}
