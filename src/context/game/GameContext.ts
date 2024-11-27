import { createContext } from "react";
import { Attempt } from "../../types";

export interface GameContextProps {
  darkMode: boolean;
  ArrayAttemps: Attempt[];
  round: number;
  setDarkMode: (darkMode: boolean) => void;
}

export const GameContext = createContext({} as GameContextProps)