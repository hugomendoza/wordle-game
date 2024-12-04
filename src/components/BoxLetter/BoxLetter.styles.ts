import {cva} from 'class-variance-authority'

export const boxLetterStyles = cva(
  'w-14 h-14 grid place-items-center font-extrabold text-2xl rounded-lg uppercase',
  {
    variants:{
      status: {
        initial: 'bg-grey bg-opacity-30 dark:bg-opacity-20',
        correct: 'bg-green',
        present: 'bg-yellow',
        absent: 'bg-grey'
      }
    },
    defaultVariants: {
      status: 'initial'
    } 
  },
)