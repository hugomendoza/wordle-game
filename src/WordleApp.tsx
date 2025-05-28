/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { Keyboard, ModalIntroduction, ModalStadistics, WrapperRowLetter } from './components'
import { useUi } from './hooks'
import { GameLayout } from './Layout'
import { useWordleGameStore } from './store'


function WordleApp() {
  const {startGame, openStadistics} = useUi()
  const rowPosition = useWordleGameStore((state) => state.rowPosition)
  const word = useWordleGameStore((state) => state.randomWord)
  const increaseRounds = useWordleGameStore((state) => state.increseRounds)
  const handleStadistics = useWordleGameStore((state) => state.handleStadistics)
  const initializeBoard = useWordleGameStore((state) => state.initializeBoard)

  console.log(word)

  useEffect(() => {
    if(rowPosition == 5 ) {
      increaseRounds()
      handleStadistics(true)
      initializeBoard()
    }
  }, [rowPosition])

  return (
    <GameLayout>
      <ModalIntroduction
        open={startGame}
      />
      <ModalStadistics
        open={openStadistics}
      />
      <WrapperRowLetter />
      <Keyboard />
    </GameLayout>
  )
}

export default WordleApp