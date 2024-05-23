export interface ILetter {
  letter: string;
  status: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IAttempt {
  attempt: ILetter[]
}