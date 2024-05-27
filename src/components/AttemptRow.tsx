import { InputLetterBox } from "./InputLetterBox"
import { IAttempt } from '../types'

export const AttemptRow = ({attempt}:IAttempt) => {

  return (
    <div className="grid grid-cols-5 gap-1">
      {attempt.map((letter, index) => (
        <InputLetterBox
          key={index}
          status={letter.status}
        />
      ))}
    </div>

  )
}
