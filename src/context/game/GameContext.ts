import { createContext } from "react";

export interface GameContextProps {
  valueToMatch: string[];
  darkMode: boolean;
  OTP: string[];
  setDarkMode: (darkMode: boolean) => void;
  setOTP: (OTP: string[]) => void;
}

export const GameContext = createContext({} as GameContextProps)