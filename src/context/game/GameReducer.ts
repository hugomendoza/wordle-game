import { GameState } from "./GameProvider"

type GameAction = {
  type: 'SET_DARK_MODE'
  darkMode: boolean
} | {
  type: 'PUSH_TO_MATCH'
  value: string
}

export const gameReducer = (state: GameState, action: GameAction) => {
  switch (action.type) {
    case 'SET_DARK_MODE':
      return {
        ...state,
        darkMode: action.darkMode
      }
    case 'PUSH_TO_MATCH':
      return {
        ...state,
        valueToMatch: [...state.valueToMatch, action.value]
      }
    default:
      return state
  }
}