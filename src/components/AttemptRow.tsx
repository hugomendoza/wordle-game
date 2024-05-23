import { InputLetterBox } from "./InputLetterBox"
import { IAttempt } from '../types'

export const AttemptRow = ({attempt}:IAttempt) => {

  console.log(attempt[0].letter[1])

  return (
    <div className="grid grid-cols-5 gap-1">
      {attempt.map((letter, index) => (
        <InputLetterBox
          key={index}
          letter={letter.letter[1]}
          status={letter.status}
          onChange={letter.onChange}
        />
      ))}
    </div>

  )
}
