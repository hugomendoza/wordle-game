import { Keyboard, WrapperRowLetter } from './components'
import { GameLayout } from './Layout'

function WordleApp() {

  return (
    <GameLayout>
      <WrapperRowLetter />
      <Keyboard />
    </GameLayout>
  )
}

export default WordleApp