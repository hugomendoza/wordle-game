import { useContext, useEffect, useState } from "react"
import { BoxLetter, ButtonAbc, Header, ModalIntro } from "./components"

import { GameContext } from "./context"

import data from "./db-words/words.txt"

function WordleApp() {

  const [loading, setLoading] = useState<string[]>([])

  const { darkMode } = useContext(GameContext)

import words from './db-words/words.json'

import abc from './abc.json'

function WordleApp() {

  const { darkMode, ArrayAttemps, round } = useContext(GameContext)
  const [ modalStart, setModalStart ] = useState<boolean>(false)
  const [ indexLetter, setIndexLetter ] = useState<number>(0)

  const onStartGame = () => {
    setModalStart(false)
    localStorage.setItem('gameInit', 'true')
  }

  const onSetLetter = (value: string) => {
    ArrayAttemps[round][indexLetter].letter = value
    const getWord = ArrayAttemps[round].map((box) => box.letter).join("")
    console.log(getWord)
    setIndexLetter(indexLetter + 1)
  }

  useEffect(() => {
    if(indexLetter === 5) {
      round + 1
      setIndexLetter(0)
      console.log("hecho");
    }

  }, [indexLetter])

  console.log(words)

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
        <section className="my-10 max-w-[380px] mx-auto space-y-2">
          {ArrayAttemps.map((attempt, index) => (
            <article
              key={index}
              className="grid grid-cols-5 gap-2"
            >
              {attempt.map((box) => (
                <BoxLetter
                  key={box.id}
                  {...box}
                />
              ))}
            </article>
          ))}
        </section>
        <section
          className="w-full px-12 py-6 gap-2 rounded-lg bg-grey-100 dark:bg-grey-200 dark:bg-opacity-5 flex flex-wrap justify-center"
        >
          { abc.map(letter =>
              <ButtonAbc
                variant="initial"
                key={letter}
                value={letter}
                onOpress={() => onSetLetter(letter)}
            />)}
        </section>
      </div>
    </main>
  )
}

export default WordleApp
