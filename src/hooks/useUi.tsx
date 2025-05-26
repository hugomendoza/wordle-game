/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useWordleGameStore } from "../store"

export const useUi = () => {
  const darkMode = useWordleGameStore((state) => state.darkMode)
  const startGame = useWordleGameStore((state) => state.startGame)
  const openStadistics = useWordleGameStore((state) => state.openStadistics)
  const handleStartGame = useWordleGameStore((state) => state.handleStartGame)
  const handleStadistics = useWordleGameStore((state) => state.handleStadistics)

  const onInitGame = () => {
    localStorage.setItem('startGame', 'true')
    handleStartGame(!startGame)
  }

  const handleModalStadistics = () => {
    handleStadistics(!openStadistics)
  }

  useEffect(() => {
    const startGame = localStorage.getItem('startGame')
    if (startGame) {
      handleStartGame(!startGame)
    }
  }, [])

  return {
    darkMode,
    startGame,
    openStadistics,
    onInitGame,
    handleModalStadistics
  }
}
