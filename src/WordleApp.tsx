import { useContext, useEffect, useState } from "react"
import { AttemptRow, Header, InputLetterBox, ModalIntro } from "./components"

import { GameContext } from "./context"

function WordleApp() {

  const { darkMode } = useContext(GameContext)

  const [ modalStart, setModalStart ] = useState<boolean>(false)

  const onStartGame = () => {
    setModalStart(false)
    localStorage.setItem('gameInit', 'true')
  }

  useEffect(() => { setModalStart(!('gameInit' in localStorage))}, [])

  return (
    <main className={`w-full min-h-screen ${darkMode && 'dark'} bg-white dark:bg-grey-700`}>
      <div className="max-w-[638px] mx-auto py-24">
        <Header />
        <ModalIntro
          open={modalStart}
          onPress={onStartGame}
        />
        {/* <article className="max-w-[400px] mx-auto my-16 space-y-3">
          {Array.from({ length: 5 }).map((_, index) => (
          ))}
        </article> */}
        <InputLetterBox />
      </div>
    </main>
  )
}

export default WordleApp
