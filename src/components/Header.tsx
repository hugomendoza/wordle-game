import { IconChartBar, IconHelp, IconMoon, IconSun } from "@tabler/icons-react";


interface Options {
  isDarkMode: boolean;
  onOpenInfo?: () => void;
  onOpenStats?: () => void;
  onDarkModeChange?: () => void;
}

export const Header = (props: Options) => {

  const {
    onOpenInfo,
    onOpenStats,
    onDarkModeChange,
    isDarkMode
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
            color={`${isDarkMode ? 'white' : 'black'}`}
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
          onClick={onDarkModeChange}
          className="grid place-items-center"
        >
          {
            isDarkMode
              ? <IconMoon color="white" />
              : <IconSun color="black" />
          }
        </button>
        <button
          onClick={onOpenStats}
          className="grid place-items-center"
        >
          <IconChartBar
            color={`${isDarkMode ? 'white' : 'black'}`}
          />
        </button>
      </div>
    </header>
  )
}
