import { IconBackspace } from "@tabler/icons-react";
import { PropsButtonAbc, StatusBoxLetter } from "../types";

const commonClasses = [
  "w-10 h-12 font-bold rounded-md uppercase text-xl"
]

const variants: Record<StatusBoxLetter, string> = {
  initial: `${commonClasses} dark:bg-blue bg-gray-300 text-grey-400 dark:text-white`,
  correct: `${commonClasses} bg-green text-white`,
  present: `${commonClasses} bg-yellow text-white`,
  absent: `${commonClasses} bg-grey text-white`
}

export const ButtonAbc = (props: PropsButtonAbc) => {
  
  const { value, onOpress, variant } = props
  
  const variantClasses = variants[variant!]
  
  {
    switch (value) {
      case "backspace":
        return (
          <button
            className={`${variantClasses}`}
            onClick={onOpress}
          >
            <IconBackspace />
          </button>
        )
      case "enter":
        return (
          <button
            className={`h-12 w-16 -ml-12 bg-grey-400 self-auto text-gray-450 grid place-items-center font-bold rounded-md dark:text-white dark:bg-blue`}
            onClick={onOpress}
          >
            { value.toUpperCase() }
          </button>
        )
      case "a":
        return (
          <button
            className={`h-12 w-10 ml-6 bg-grey-400 self-auto text-gray-450 grid place-items-center font-bold rounded-md dark:text-white dark:bg-blue`}
            onClick={onOpress}
          >
            { value.toUpperCase() }
          </button>
        )
      default:
        return (
          <button
            className={`h-12 w-10 bg-grey-400 self-auto text-gray-450 grid place-items-center font-bold rounded-md dark:text-white dark:bg-blue`}
            onClick={onOpress}
          >
            { value.toUpperCase() }
          </button>
        )
    }
  }
}