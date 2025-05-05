import { useWordleGameStore } from "@/store";
import { Button } from "../ui/button";
import { ChartColumn, CircleHelp, Moon, Sun } from "lucide-react";

export const Header = () => {
  const darkMode = useWordleGameStore((state) => state.darkMode)
  const setDarkMode = useWordleGameStore((state) => state.handleDarkMode)

  return (
    <header
      className='rounded-lg p-4 flex items-center justify-between border border-slate-50 shadow-xs dark:border-slate-700 dark:shadow-white/10 mb-6'
    >
      <div>
        <Button
          variant="outline"
          size="icon"
          className="text-slate-400 dark:text-slate-300"
        >
          <CircleHelp />
        </Button>
      </div>
      <div>
        <h1 className="text-xl md:text-3xl font-bold text-black dark:text-slate-200">
          WORDLE GAME
        </h1>
      </div>
      <div className="flex gap-2 items-center">
        <Button
          variant="outline"
          size="icon"
          className="text-slate-400 dark:text-slate-300"
        >
          <ChartColumn />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="text-slate-400 dark:text-slate-300"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun /> : <Moon />}
        </Button>
      </div>
    </header>
  )
}
