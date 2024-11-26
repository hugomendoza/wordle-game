import { commonClasses } from "../helpers"
import { PropsBoxLetter, StatusBoxLetter } from "../types"

const variants: Record<StatusBoxLetter, string> = {
  initial: `${commonClasses} bg-grey bg-opacity-30 dark:bg-opacity-20`,
  correct: `${commonClasses} bg-green`,
  present: `${commonClasses} bg-yellow`,
  absent: `${commonClasses} bg-grey`
}

export const BoxLetter = (props: PropsBoxLetter) => {

  const {
    letter,
    status
  } = props

  const variantClasses = variants[status!]

  return (
    <div className={`${variantClasses} grid place-items-center text-white`}>
      {letter}
    </div>
  )
}
