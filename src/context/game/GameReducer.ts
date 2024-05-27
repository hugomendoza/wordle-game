import { GameState } from "./GameProvider"

type GameAction = {
  type: 'SET_VALUE'
  value: string
} | {
  type: 'SET_DARK_MODE'
  darkMode: boolean
}

export const gameReducer = (state: GameState, action: GameAction) => {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        value: action.value
      }
    case 'SET_DARK_MODE':
      return {
        ...state,
        darkMode: action.darkMode
      }
    default:
      return state
  }
}