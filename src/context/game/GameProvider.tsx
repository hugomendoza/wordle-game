import { useEffect, useReducer, useState } from "react";
import { GameContext } from "./GameContext"
import { gameReducer } from "./GameReducer";
import { preferColorSchema } from "../../helpers";

export interface GameState {
  valueToMatch: string[];
  darkMode: boolean;
}

const INITIAL_STATE: GameState = {
  valueToMatch: [],
  darkMode: false
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const GameProvider = ({ children }: Props) => {

  const [ state, dispatch ] = useReducer(gameReducer, INITIAL_STATE)
  const [OTP, setOTP] = useState<string[]>(new Array(length).fill(''))

  const setDarkMode = (darkMode: boolean) => {
    dispatch({ type: 'SET_DARK_MODE', darkMode })
  }

  useEffect(() => setDarkMode(preferColorSchema.matches), []);

  return (
    <GameContext.Provider value={{
      ...state,
      OTP,
      setDarkMode,
      setOTP
    }}>
      { children }
    </GameContext.Provider>
  )
}