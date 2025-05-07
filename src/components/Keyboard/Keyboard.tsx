import { Delete } from 'lucide-react'
import abc from '../../abc.json'
import { Button } from '../ui/button'

const KEYBOARD_ROWS = {
  first: abc.slice(0, 10),
  second: abc.slice(10, 20),
  third: abc.slice(20)
}

const commonClasses = ['size-12 uppercase font-bold dark:text-white hover:bg-slate-200']

export const Keyboard = () => {
  return (
    <section className='space-y-3 mt-6 uppercase'>
      <div className="flex justify-center gap-3">
        {KEYBOARD_ROWS.first.map(letter => (
          <Button
            key={letter}
            className={`${commonClasses}`}
            variant="outline"
          >
            {letter}
          </Button>
        ))}
      </div>
      <div className="flex justify-center gap-3 ml-6">
        {KEYBOARD_ROWS.second.map(letter => (
          <Button
            key={letter}
            className={`${commonClasses}`}
            variant="outline"
          >
            {letter}
          </Button>
        ))}
      </div>
      <div className="flex justify-center gap-3">
        {KEYBOARD_ROWS.third.map(letter => {
          switch (letter) {
            case 'enter':
              return (
                <Button
                  key={letter}
                  className={`${commonClasses} w-auto`}
                  variant="outline"
                >
                  {letter}
                </Button>
              )
            case 'backspace':
              return (
                <Button
                  key={letter}
                  className={`${commonClasses} min-w-14 p-0`}
                  variant="outline"
                >
                  <Delete size={40} />
                </Button>
              )
            default:
              return (
                <Button
                  key={letter}
                  className={`${commonClasses}`}
                  variant="outline"
                >
                  {letter}
                </Button>
              )
          }
        })}
      </div>
    </section>
  )
}