import { Keyboard, WrapperRowLetter } from "./components"
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
      <WrapperRowLetter />
      <Keyboard />
    </GameLayout>
  )
}

export default WordleApp