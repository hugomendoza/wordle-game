import { useEffect, useState } from "react"
import { Header, ModalIntro } from "./components"

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
    <main
      className={`w-full min-h-screen bg-white dark:bg-grey-700`}
    >
      <div className="max-w-[638px] mx-auto py-24">
        <Header />
        {/* <ModalIntro
          open={modalStart}
          onPress={onStartGame}
        /> */}
        <section className="my-10 max-w-[380px] mx-auto space-y-2">
          {/* {ArrayAttemps.map((attempt, index) => (
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
          ))} */}
        </section>
        <section
          className="w-full px-12 py-6 gap-2 rounded-lg bg-grey-100 dark:bg-grey-200 dark:bg-opacity-5 flex flex-wrap justify-center"
        >
          {/* { abc.map(letter =>
              <ButtonAbc
                variant="initial"
                key={letter}
                value={letter}
                onOpress={() => onSetLetter(letter)}
            />)} */}
        </section>
      </div>
    </main>
  )
}

export default WordleApp
