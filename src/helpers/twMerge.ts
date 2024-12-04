import {twMerge} from 'tailwind-merge'

export const twMergeClasses = (...classes: string[]) => {
  return twMerge(...classes )
}