import { StateCreator } from "zustand"

export interface UiSlice {
  darkMode: boolean;
  startGame: boolean;
  setDarkMode: (value: boolean) => void;
  setStartGame: (value: boolean) => void;
}

export const createUiSlice: StateCreator<UiSlice> = (set) => ({
  darkMode: false,
  startGame: false,
  setDarkMode: (value) => set({ darkMode: value }),
  setStartGame: (value) => set({ startGame: value})
})