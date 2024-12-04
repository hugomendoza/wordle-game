/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useWordleGameStore } from '../store'
import { Header, ModalIntroduction } from '../components'
import { preferColorSchema } from '../helpers'

interface GameLayoutProps {
  children: JSX.Element | JSX.Element[]
}

export const GameLayout = ({children}: GameLayoutProps) => {
  const darkMode = useWordleGameStore((state) => state.darkMode)
  const setDarkMode = useWordleGameStore((state) => state.setDarkMode)

  useEffect(() => {
    setDarkMode(preferColorSchema.matches);
  }, [])
  
  return (
    <main
      className={`w-full min-h-screen ${darkMode && 'dark'} bg-white dark:bg-grey-700`}
    >
      <div className="max-w-[638px] mx-auto py-24">
        <Header />
        <ModalIntroduction
          open={true}
          onPress={() => {}}
        />
        {children}
      </div>
    </main>
  )
}
