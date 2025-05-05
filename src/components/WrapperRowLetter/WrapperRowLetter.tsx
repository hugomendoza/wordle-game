/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useWordleGameStore } from '@/store'
import { RowBoxLetter } from '../SingleRowLetter/SingleRowLetter'

export const WrapperRowLetter = () => {
  const board = useWordleGameStore((state) => state.board)
  const initializeBoard = useWordleGameStore((state) => state.initializeBoard)

  useEffect(() => {
    initializeBoard()
  }, [])
  
  return (
    <>
      {board.map((row) => (
        <RowBoxLetter
          key={crypto.randomUUID()}
          letters={row}
        />
      ))}
    </>
  )
}
