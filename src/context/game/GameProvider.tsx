import { useEffect, useReducer} from "react";
import { GameContext, GameContextProps } from "./GameContext"
import { gameReducer } from "./GameReducer";
import { preferColorSchema } from "../../helpers";

const INITIAL_STATE: GameContextProps = {
  darkMode: false,
  ArrayAttemps: Array(5).fill(null).map(() => (
    Array(5).fill(null).map((_, index) => ({
      id: (index + 1).toString(),
      status: "initial",
      letter: "",
    }))
  )),
  round: 0,
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
      setDarkMode,
    }}>
      { children }
    </GameContext.Provider>
  )
}
