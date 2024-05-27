import { useRef, useState } from "react"
import { ILetter } from '../types'
import { commonClasses } from "../helpers"

export const InputLetterBox = ({ status }:ILetter) => {

  const boxCommonClases = `${commonClasses} ${status} text-center text-white`
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setValue(value)
  }

  return (
    <input
      value={value}
      maxLength={1}
      ref={inputRef}
      className={boxCommonClases}
      onChange={onInputChange}
    />
  )
}
