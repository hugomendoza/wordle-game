import { GameLayout } from "./Layout"

// import data from "./db-words/words.txt"

function WordleApp() {

  // const [loading, setLoading] = useState<string[]>([])
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
