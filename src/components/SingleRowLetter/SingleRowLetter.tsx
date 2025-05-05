import { RowBoxLetterProps } from "@/types"
import { BoxLetter } from "../BoxLetter/BoxLetter"

export const RowBoxLetter = ({letters}:RowBoxLetterProps) => {
  return (
    <div className='flex flex-wrap justify-center'>
      {letters.map(({id, letter, status}) => (
        <BoxLetter
          key={id}
          status={status}
          className='m-2'
        >
          <p>{letter}</p>
        </BoxLetter>
      ))}
    </div>
  )
}