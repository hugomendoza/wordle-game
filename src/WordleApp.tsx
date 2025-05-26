import { Keyboard, ModalIntroduction, ModalStadistics, WrapperRowLetter } from './components'
import { useUi } from './hooks'
import { GameLayout } from './Layout'


function WordleApp() {
  const {startGame, openStadistics} = useUi()
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