import { IconChartHistogram, IconHelp } from "@tabler/icons-react"
import { ButtonDarkMode } from "./ButtonDarkMode"
import { useUi } from "../hooks";

export const Header = () => {

  const { darkMode, onStartGame } = useUi()
  
  const colorIcons = darkMode? "#DADCE0" : "#818181"
  const sizeIcons = 28

  return (
    <header
      className='bg-grey-100 rounded-lg p-3 flex items-center justify-between dark:bg-grey-200 dark:bg-opacity-5'
    >
      <div>
        <button
          className="grid place-items-center mr-8"
          onClick={() => onStartGame(false)}
        >
          <IconHelp
            color={colorIcons}
            size={sizeIcons}
          />
        </button>
      </div>
      <div>
        <h1 className="text-4xl tracking-wider font-bold text-black dark:text-grey-200">
          WORDLE
        </h1>
      </div>
      <div className="flex gap-2 items-center">
        <button
          className="grid place-items-center"
        >
          <IconChartHistogram
            color={colorIcons}
            size={sizeIcons}
          />
        </button>
        <ButtonDarkMode />
      </div>
    </header>
  )
}
