import {cva} from 'class-variance-authority'

export const boxLetterStyles = cva(
  'w-12 h-12 grid place-items-center font-extrabold text-lg rounded-lg uppercase',
  {
    variants:{
      status: {
        initial: 'bg-gray-300/20 text-gray-500 dark:bg-gray-400/50 dark:text-gray-200',
        correct: 'border border-teal-400 bg-teal-200 text-teal-700 dark:bg-teal-900/50 dark:text-teal-500',
        present: 'border border-yellow-400 bg-yellow-200 text-yellow-700 dark:bg-yellow-700/40 dark:text-yellow-400',
        absent: 'border border-slate-400 bg-slate-200 text-slate-700 dark:bg-slate-700/40 dark:text-slate-300'
      }
    },
    defaultVariants: {
      status: 'initial'
    } 
  },
)