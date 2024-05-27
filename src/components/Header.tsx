import { IconChartBar, IconHelp, IconMoon } from "@tabler/icons-react";
import { useContext } from "react";
import { GameContext } from "../context";


interface Options {
  onOpenInfo?: () => void;
  onOpenStats?: () => void;
}

export const Header = (props: Options) => {

  const { darkMode, setDarkMode } = useContext(GameContext)

  const {
    onOpenInfo,
    onOpenStats,
  } = props

  return (
    <header
      className='bg-grey-100 rounded-md p-3 flex items-center justify-between dark:bg-grey-250'
    >
      <div>
        <button
          onClick={onOpenInfo}
          className="grid place-items-center"
        >
          <IconHelp
            color="black"
          />
        </button>
      </div>
      <div>
        <h1 className="text-4xl tracking-wider font-bold text-black dark:text-grey-350">
          WORDLE
        </h1>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="grid place-items-center"
        >
          <IconMoon color="white" />
        </button>
        <button
          onClick={onOpenStats}
          className="grid place-items-center"
        >
          <IconChartBar
            color="black"
          />
        </button>
      </div>
    </header>
  )
}
