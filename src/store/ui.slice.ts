import { StateCreator } from "zustand"

export interface UiSlice {
  darkMode: boolean;
  startGame: boolean;
  openStadistics: boolean;
  handleDarkMode: (value: boolean) => void;
  handleStartGame: (value: boolean) => void;
  handleStadistics:(value: boolean) => void;
}

export const createUiSlice: StateCreator<UiSlice> = (set) => ({
  darkMode: false,
  startGame: true,
  openStadistics: false,
  handleDarkMode: (value) => set({ darkMode: value }),
  handleStartGame: (value) => set({ startGame: value}),
  handleStadistics: (value) => set({ openStadistics: value})
})