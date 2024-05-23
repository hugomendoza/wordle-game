import { useEffect, useMemo, useState } from "react"
import { ButtonAbc, Header, LetterState, ModalIntro, WrapperRound } from "./components"

import wordsDb from './words.json'
import abc from './abc.json'
import { preferColorSchema } from "./helpers"

function WordleApp() {

  const randomNumber = (max: number) => Math.floor(Math.random() * max)
  const targetWords = useMemo(() => wordsDb[randomNumber(wordsDb.length)], [])
  const arrayTargetWord = targetWords.split('')

  const [ darkMode, setDarkMode ] = useState<boolean>(false)
  const [ modalStart, setModalStart ] = useState<boolean>(false)
  const [ wordToMatch, setWordToMatch ] = useState<string[]>([])
  const [ initGame, setInitGame ] = useState({
    currenAttempt: 0,
    round: 0,
    maxRounds: 5
  })
  
  const onDarkModeChange = () => setDarkMode(!darkMode)

  const onStartGame = () => {
    setModalStart(false)
    localStorage.setItem('gameInit', 'true')
  }

  const onAddLetter = (letter: string) => {
    setWordToMatch([...wordToMatch, letter])
  }

  useEffect(() => { setModalStart(!('gameInit' in localStorage))}, [])
  useEffect(() => setDarkMode(preferColorSchema.matches), []);

  return (
    <main className={`w-full min-h-screen ${darkMode && 'dark'} bg-white dark:bg-grey-700`}>
      <div className="max-w-[638px] mx-auto py-24">
        <Header
          isDarkMode={darkMode}
          onDarkModeChange={onDarkModeChange}
        />
        <ModalIntro
          open={modalStart}
          onPress={onStartGame}
        />
        <article className="max-w-[400px] mx-auto my-16 space-y-3">
          {Array.from({ length: initGame.maxRounds }).map((_, index) => (
            <WrapperRound
              key={index} 
              attempt={
                Array.from({ length: initGame.maxRounds }, () => ({ char: wordToMatch[index], state: LetterState.Default }))
              } 
            />
          ))}
        </article>
        <footer
          className='flex flex-wrap text-grey-450 gap-2 p-12 bg-gray-100 dark:bg-grey-200 rounded-lg justify-center'
        >
          {
            abc.map(letter =>
              <ButtonAbc
                key={letter}
                value={letter}
                onOpress={() => onAddLetter(letter)}
            />)}
        </footer>
      </div>
    </main>
  )
}

export default WordleApp
