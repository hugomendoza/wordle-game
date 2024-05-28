import { IconChartHistogram, IconHelp } from "@tabler/icons-react"
import { useContext } from "react"
import { GameContext } from "../context"
import { ButtonDarkMode } from "./ButtonDarkMode"


interface Options {
  onOpenInfo?: () => void;
  onOpenStats?: () => void;
}

export const Header = (props: Options) => {

  const { darkMode } = useContext(GameContext)
  const colorIcons = darkMode? "#DADCE0" : "#818181"
  const sizeIcons = 28

  const {
    onOpenInfo,
    onOpenStats,
  } = props

  return (
    <header
      className='bg-grey-100 rounded-md p-3 flex items-center justify-between dark:bg-grey-200 dark:bg-opacity-5'
    >
      <div>
        <button
          onClick={onOpenInfo}
          className="grid place-items-center mr-8"
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
          onClick={onOpenStats}
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
