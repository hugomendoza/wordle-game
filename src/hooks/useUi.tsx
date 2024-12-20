import { useWordleGameStore } from "../store"

export const useUi = () => {
  const darkMode = useWordleGameStore((state) => state.darkMode)
  const onStartGame = useWordleGameStore((state) => state.setStartGame)
  return {
    darkMode,
    onStartGame
  }
}
