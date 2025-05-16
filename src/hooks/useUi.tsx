import { useWordleGameStore } from "../store"

export const useUi = () => {
  const darkMode = useWordleGameStore((state) => state.darkMode)
  return {
    darkMode
  }
}
