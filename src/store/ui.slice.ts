import { StateCreator } from "zustand"

export interface UiSlice {
  darkMode: boolean;
  startGame: boolean;
  handleDarkMode: (value: boolean) => void;
  handleStartGame: (value: boolean) => void;
}

export const createUiSlice: StateCreator<UiSlice> = (set) => ({
  darkMode: false,
  startGame: false,
  handleDarkMode: (value) => set({ darkMode: value }),
  handleStartGame: (value) => set({ startGame: value})
})