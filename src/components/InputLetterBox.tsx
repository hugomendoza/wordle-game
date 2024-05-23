import { useRef } from "react"
import { ILetter } from '../types'

export const InputLetterBox = ({letter, status, onChange}:ILetter) => {

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <input
      value={letter}
      maxLength={1}
      ref={inputRef}
      className={`w-16 h-16 p-6 text-3xl text-white font-extrabold rounded-md ${status}`}
      onChange={onChange}
    />
  )
}
