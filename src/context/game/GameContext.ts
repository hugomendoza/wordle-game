import { createContext } from "react";

export interface GameContextProps {
  value: string;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void
}

export const GameContext = createContext({} as GameContextProps)