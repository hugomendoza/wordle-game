import { Keyboard, ModalIntroduction, WrapperRowLetter } from './components'
import { GameLayout } from './Layout'

function WordleApp() {

  return (
    <GameLayout>
      <ModalIntroduction open={true} />
      <WrapperRowLetter />
      <Keyboard />
    </GameLayout>
  )
}

export default WordleApp