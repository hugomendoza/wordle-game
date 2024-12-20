import {ComponentProps} from 'react'

type ButtonProps = ComponentProps<'button'>

export const Button = ({...rest}: ButtonProps) => {
  return (
    <button
      {...rest}
      className="min-w-[14rem] bg-green h-[3rem] grey place-items-center text-xl text-white font-extrabold rounded-md mx-auto"
    >
      {rest.children}
    </button>
  )
}
