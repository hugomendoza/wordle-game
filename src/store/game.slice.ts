import { StateCreator} from 'zustand'
import { createEmptyRows, selectRandomLetter } from '@/helpers'
import { BoxLetterType } from '@/types'

export interface GameSlice {
  board: BoxLetterType[][];
  rowPosition: number;
  letterPosition: number;
  randomWord: string;
  coincidences: number;
  rounds: number;
  initializeBoard: () => void;
  updateLetter: (letter:string) => void;
  updateRowPosition: () => void;
  setRandomWord: () => void;
  increseCoincidences: () => void;
  increseRounds: () => void;
}

export const createGameSlice: StateCreator<GameSlice> = (set) => ({
  board: [],
  rowPosition: 0,
  letterPosition: 0,
  randomWord: '',
  coincidences: 0,
  rounds: 0,
  increseCoincidences: () => set((state) => ({coincidences: state.coincidences + 1})),
  increseRounds: () => set((state) => ({rounds: state.rounds + 1})),
  setRandomWord: async () => {
    const setRandomWord = await selectRandomLetter() as string
    set(() => ({ randomWord: setRandomWord }))
  },
  initializeBoard: () => {
    set(() => ({
      board: Array.from({ length: 5 }).map(() => createEmptyRows(5)),
      rowPosition: 0,
      letterPosition: 0,
    }))
  },
  updateLetter: (letter: string) => {
    set((state) => {
      const { board, rowPosition, letterPosition } = state
      const currentCell = board[rowPosition][letterPosition]

      if (currentCell.letter !== '') return state

      const updatedBoard = board.map((row, rowIndex) => {
        if (rowIndex !== rowPosition) return row
        
        return row.map((cell, cellIndex) => {
          if (cellIndex !== letterPosition) return cell
          
          return { ...cell, letter }
        })
      })

      return {
        letterPosition: letterPosition + 1,
        board: updatedBoard
      }
    })
  },
  updateRowPosition: () => {
    set((state) => {
      const wordSelected = state.randomWord
      const { board, rowPosition } = state
      const typedWord = state.board[state.rowPosition].map((cell) => cell.letter).join('')
      if (typedWord === wordSelected) {
        const updatedBoard = board.map((row, rowIndex) => {
          if (rowIndex !== rowPosition) return row
          
          return row.map((cell) => {
            return { ...cell, status: 'correct' }
          })
        })
        return {
          board: updatedBoard as BoxLetterType[][],
          coincidences: state.coincidences + 1,
          rounds: state.rounds + 1
        }
      }

      if (typedWord !== wordSelected) {
        const splitWordSelected = wordSelected.split('')
        const updatedBoard = board.map((row, rowIndex) => {
          if (rowIndex !== rowPosition) return row
          return row.map((cell, cellIndex) => {
            const letter = cell.letter
            if (letter === '') return cell
            if (splitWordSelected[cellIndex] === letter) return { ...cell, status: 'correct' }
            if (splitWordSelected.includes(letter)) return { ...cell, status: 'present' }
            return { ...cell, status: 'absent' }
          })
        })
        return {
          board: updatedBoard as BoxLetterType[][],
          rowPosition: state.rowPosition + 1,
          letterPosition: 0,
        }
      }
      return state
    })
  },
})