import { IconBackspace } from "@tabler/icons-react";

interface Options {
  value: string;
  width?: string;
  margin?: string;
  onOpress?: () => void;
}

export const ButtonAbc = (props: Options) => {

  const { value, onOpress } = props
  {
    switch (value) {
      case "backspace":
        return (
          <button
            className={`h-12 w-16 bg-grey-400 self-auto text-gray-450 grid place-items-center font-bold rounded-md dark:text-white dark:bg-blue`}
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
