export type StatusBoxLetter = 'initial' | 'correct' | 'present' | 'absent'

export interface PropsBoxLetter {
  id: string;
  status: StatusBoxLetter;
  letter: string;
}

export type Attempt  = PropsBoxLetter[]

export interface PropsButtonAbc {
  variant: StatusBoxLetter;
  value: string;
  onOpress?: () => void;
}
