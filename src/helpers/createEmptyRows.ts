import { BoxLetterType } from "@/types";

export const createEmptyRows = (length: number): BoxLetterType[] => 
  Array.from({ length }).map(() => ({
    id: crypto.randomUUID(),
    letter: '',
    status: 'initial',
  })
);