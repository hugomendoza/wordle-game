import { ModalLayout } from "../Layout"
import { Button } from "./Button"

interface Options {
  open: boolean
  onPress?: () => void
}

export const ModalIntro = ({open, onPress}: Options) => {

  return (
    <ModalLayout
      open={open}
    >
      <header>
        <h2 className="text-3xl font-extrabold text-center mb-8">
          Cómo jugar
        </h2>
      </header>
      <article className="space-y-3">
        <p>
          Adivina la palabra oculta en cinco intentos.
        </p>
        <p>
          Cada intento debe ser una palabra válida de 5 letras.
        </p>
        <p>
          Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.
        </p>
        <p>
          <strong>Ejemplos</strong>
        </p>
        <ul className="grid grid-cols-5 gap-1">
          <li
            className="w-16 h-16 grid place-items-center border border-green bg-green font-bold text-3xl rounded-lg "
          >
            G
          </li>
          <li
            className="w-16 h-16 grid place-items-center bg-white dark:bg-grey-800 border border-black dark:border-white font-bold text-3xl rounded-lg"
          >
            A
          </li>
          <li
            className="w-16 h-16 grid place-items-center bg-white dark:bg-grey-800 border border-black dark:border-white font-bold text-3xl rounded-lg"
          >
            T
          </li>
          <li
            className="w-16 h-16 grid place-items-center bg-white dark:bg-grey-800 border border-black dark:border-white font-bold text-3xl rounded-lg"
          >
            O
          </li>
          <li
            className="w-16 h-16 grid place-items-center bg-white dark:bg-grey-800 border border-black dark:border-white font-bold text-3xl rounded-lg"
          >
            S
          </li>
        </ul>
        <p>
          La letra <strong>G</strong> está en la palabra y en la posición correcta.
        </p>
        <ul className="grid grid-cols-5 gap-1">
          <li
            className="w-16 h-16 grid place-items-center border border-black dark:border-white bg-white dark:bg-grey-800 font-bold text-3xl rounded-lg"
          >
            V
          </li>
          <li
            className="w-16 h-16 grid place-items-center bg-white dark:bg-grey-800 border border-black dark:border-white font-bold text-3xl rounded-lg"
          >
            O
          </li>
          <li
            className="w-16 h-16 grid place-items-center bg-yellow border border-yellow font-bold text-3xl rounded-lg"
          >
            C
          </li>
          <li
            className="w-16 h-16 grid place-items-center bg-white dark:bg-grey-800 border border-black dark:border-white font-bold text-3xl rounded-lg"
          >
            A
          </li>
          <li
            className="w-16 h-16 grid place-items-center bg-white dark:bg-grey-800 border border-black dark:border-white font-bold text-3xl rounded-lg"
          >
            L
          </li>
        </ul>
        <p>La letra <strong>C</strong> está en la palabra pero en la posición incorrecta.</p>
        <ul className="grid grid-cols-5 gap-1">
          <li
            className="w-16 h-16 grid place-items-center border border-black dark:border-white bg-white dark:bg-grey-800 font-bold text-3xl rounded-lg"
          >
            C
          </li>
          <li
            className="w-16 h-16 grid place-items-center bg-white dark:bg-grey-800 border border-black dark:border-white font-bold text-3xl rounded-lg"
          >
            A
          </li>
          <li
            className="w-16 h-16 grid place-items-center bg-white dark:bg-grey-800 border border-black dark:border-white font-bold text-3xl rounded-lg"
          >
            N
          </li>
          <li
            className="w-16 h-16 grid place-items-center bg-white dark:bg-grey-800 border border-black dark:border-white font-bold text-3xl rounded-lg"
          >
            T
          </li>
          <li
            className="w-16 h-16 grid place-items-center bg-grey-150 border border-grey-150 font-bold text-3xl rounded-lg"
          >
            O
          </li>
        </ul>
        <p>
          La letra <strong>O</strong> no está en la palabra.
        </p>
        <p>
          Puede haber letras repetidas. Las pistas son independientes para cada letra.
        </p>
        <p className="text-center">
          ¡Una palabra nueva cada 5 minutos!
        </p>
      </article>
      <footer className="text-center mt-8">
        <Button
          value="!JUGAR¡"
          onOpress={onPress}
        />
      </footer>
    </ModalLayout>
  )
}
