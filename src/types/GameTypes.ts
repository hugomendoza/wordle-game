export type LetterStatus = "initial" | "correct" | "present" | "absent";

export type BoxLetterType = {
  id: number | string;
  letter: string;
  status: LetterStatus;
}

export interface RowBoxLetterProps {
  letters: BoxLetterType[];
}
