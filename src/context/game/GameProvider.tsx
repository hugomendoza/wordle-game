import { useEffect, useReducer } from "react";
import { GameContext } from "./GameContext"
import { gameReducer } from "./GameReducer";
import { preferColorSchema } from "../../helpers";

export interface GameState {
  value: string;
  darkMode: boolean;
}

const INITIAL_STATE: GameState = {
  value: '',
  darkMode: false
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const GameProvider = ({ children }: Props) => {

  const [ state, dispatch ] = useReducer(gameReducer, INITIAL_STATE)

  const setDarkMode = (darkMode: boolean) => {
    dispatch({ type: 'SET_DARK_MODE', darkMode })
  }

  useEffect(() => setDarkMode(preferColorSchema.matches), []);

  return (
    <GameContext.Provider value={{
      ...state,
      setDarkMode
    }}>
      { children }
    </GameContext.Provider>
  )
}
