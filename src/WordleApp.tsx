import { useContext, useEffect, useState } from "react"
import { Header, ModalIntro } from "./components"

import { GameContext } from "./context"

import data from "./db-words/words.txt"

function WordleApp() {

  const [loading, setLoading] = useState<string[]>([])

  const { darkMode } = useContext(GameContext)

  const [ modalStart, setModalStart ] = useState<boolean>(false)

  const onStartGame = () => {
    setModalStart(false)
    localStorage.setItem('gameInit', 'true')
  }

  useEffect(() => { setModalStart(!('gameInit' in localStorage))}, [])
  useEffect(() => {
    fetch(data)
      .then((res) => res.text())
      .then((text) => {
        const words = text.split(/\s+/)
        const fiveLetterWords = words.filter((word) => word.length === 5)
        setLoading(fiveLetterWords);
      })
  }, [])

  console.log(loading)

  return (
    <main
      className={`w-full min-h-screen ${darkMode && 'dark'} bg-white dark:bg-grey-700`}
    >
      <div className="max-w-[638px] mx-auto py-24">
        <Header />
        <ModalIntro
          open={modalStart}
          onPress={onStartGame}
        />
      </div>
    </main>
  )
}

export default WordleApp
