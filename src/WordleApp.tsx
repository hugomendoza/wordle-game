import { useEffect, useState } from "react"
import { Header, ModalIntro } from "./components"
import { GameLayout } from "./Layout"

// import data from "./db-words/words.txt"

function WordleApp() {

  // const [loading, setLoading] = useState<string[]>([])

  const [ modalStart, setModalStart ] = useState<boolean>(false)

  useEffect(() => { setModalStart(!('gameInit' in localStorage))}, [])
  // useEffect(() => {
  //   fetch(data)
  //     .then((res) => res.text())
  //     .then((text) => {
  //       const words = text.split(/\s+/)
  //       const fiveLetterWords = words.filter((word) => word.length === 5)
  //       setLoading(fiveLetterWords);
  //     })
  // }, [])

  return (
    <GameLayout>
      <h1>Wordle Game</h1>
    </GameLayout>
  )
}

export default WordleApp
