export enum LetterState {
  Correct = "bg-blue",
  Present = "present",
  Absent = "absent",
  Default = "bg-grey-300"
}

export interface OptionsLetter {
  char: string;
  state: LetterState;
}

export const LetterBox = ({char, state}:OptionsLetter) => {
  return (
    <li
      className={`w-16 h-16 grid place-items-center text-3xl text-white font-extrabold rounded-md ${state}`}
    >
      {char}
    </li>
  )
}
