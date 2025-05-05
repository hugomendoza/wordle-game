import { RowBoxLetter } from "./components"
import { Button } from "./components/ui/button"
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
    <Button
      variant="destructive"
      className="cursor-pointer"
      onClick={() => {
        console.log("click")
      }}> Test </Button>
  )
}

export default WordleApp
