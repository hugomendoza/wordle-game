import { RowBoxLetter } from "./components"
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
      
      <RowBoxLetter letters={[
        {
          id: 1,
          letter: "",
          status: "initial"
        },
        {
          id: 2,
          letter: "",
          status: "initial"
        },
        {
          id: 3,
          letter: "",
          status: "initial"
        },
        {
          id: 4,
          letter: "",
          status: "initial"
        },
        {
          id: 5,
          letter: "",
          status: "initial"
        }
      ]} />
    </GameLayout>
  )
}

export default WordleApp
