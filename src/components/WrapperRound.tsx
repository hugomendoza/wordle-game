import { LetterBox, OptionsLetter } from "./LetterBox";

interface Options {
  attempt: OptionsLetter[];
}

export const WrapperRound = ({ attempt }:Options) => {
  return (
    <ul className="grid grid-cols-5 gap-1">
      {attempt.map((letter, index) => (
        <LetterBox key={index} char={letter.char} state={letter.state}/>
      ))}
    </ul>
  )
}
