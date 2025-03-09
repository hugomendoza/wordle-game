import { BoxLetter } from "../BoxLetter/BoxLetter";

type BoxLetter = {
  id: number | string;
  letter: string;
  status: "initial" | "correct" | "present" | "absent";
}

interface RowBoxLetter {
  letters: BoxLetter[];
}

export const RowBoxLetter = ({letters}:RowBoxLetter) => {
  return (
    <div className="flex flex-wrap justify-center gap-1">
      {letters.map(({id, letter, status}) => (
        <BoxLetter
          key={id}
          status={status}
        >
          <p>{letter}</p>
        </BoxLetter>
      ))}
    </div>
  )
}
