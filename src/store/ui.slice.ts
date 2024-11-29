import { StateCreator } from "zustand"

export interface UiSlice {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export const createUiSlice: StateCreator<UiSlice> = (set) => ({
  darkMode: false,
  setDarkMode: (value) => set({ darkMode: value })
})