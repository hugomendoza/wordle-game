import { StateCreator} from 'zustand'
import { createEmptyRows } from '@/helpers'
import { BoxLetterType } from '@/types'

export interface GameSlice {
  board: BoxLetterType[][];
  actualRow: number;
  actualLetter: number;
  initializeBoard: () => void;
}

export const createGameSlice: StateCreator<GameSlice> = (set) => ({
  board: [],
  actualRow: 0,
  actualLetter: 0,
  initializeBoard: () => {
    set(() => ({
      board: Array.from({ length: 5 }).map(() => createEmptyRows(5)),
    }))
  },
})