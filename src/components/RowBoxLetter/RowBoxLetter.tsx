import { BoxLetter } from "../BoxLetter/BoxLetter";

type BoxLetter = {
  letter: string;
  status: "initial" | "correct" | "present" | "absent";
}

interface RowBoxLetter {
  letters: BoxLetter[];
}

export const RowBoxLetter = ({letters}:RowBoxLetter) => {
  return (
    <div>
      {/* {letters.map(letter) => ({
        <BoxLetter>
          <p>{}</p>
        </BoxLetter>
      })} */}
      {/* {letters.map(() => {

      })} */}
    </div>
  )
}
