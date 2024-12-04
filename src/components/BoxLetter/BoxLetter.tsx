
import { ComponentProps } from 'react'
import { twMergeClasses } from '../../helpers'
import { boxLetterStyles } from './BoxLetter.styles'

type PropsBoxLetter = ComponentProps<'div'> & {
  status?: "initial" | "correct" | "present" | "absent",
}

export const BoxLetter = (props: PropsBoxLetter) => {

  const {
    status = "initial",
    className = '',
    children,
    ...rest
  } = props

  return (
    <div
      className={twMergeClasses(boxLetterStyles({ status }), className)}
      {...rest}
    >
      {children}
    </div>
  )
}
