import { commonClasses } from "../helpers"
import { ModalLayout } from "../Layout"
import { Button } from "./Button"

interface Options {
  open: boolean
  onPress?: () => void
}

const firstExample: string[] = ['g', 'a', 't', 'o', 's']
const secondExample: string[] = ['v', 'o', 'c', 'a', 'l']
const thirdExample: string[] = ['c', 'a', 'n', 't', 'o']

const boxCommonClasses = `${commonClasses} border border-black bg-white dark:bg-grey-700 dark:border-grey`

export const ModalIntro = ({open, onPress}: Options) => {

  return (
    <ModalLayout
      open={open}
    >
      <header>
        <h2 className="text-2xl font-extrabold text-center mb-8">
          Cómo jugar
        </h2>
      </header>
      <article className="space-y-3 text-[0.85rem]">
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
        <ul className="grid grid-cols-5 gap-1 text-black dark:text-white">
          {
            firstExample.map((letter, index) => ((
              letter === 'g' ? (  
                <li
                  key={index}
                  className={`${commonClasses} border border-green bg-green`}
                >
                  {letter.toUpperCase()}
                </li>
              ) : (
                <li
                  key={index}
                  className={boxCommonClasses}
                >
                  {letter.toUpperCase()}
                </li>
              )
            )
          ))}
        </ul>
        <p>
          La letra <strong>G</strong> está en la palabra y en la posición correcta.
        </p>
        <ul className="grid grid-cols-5 gap-1">
          {
            secondExample.map((letter, index) => ((
              letter === 'c' ? (  
                <li
                  key={index}
                  className={`${commonClasses} border border-yellow bg-yellow`}
                >
                  {letter.toUpperCase()}
                </li>
              ) : (
                <li
                  key={index}
                  className={boxCommonClasses}
                >
                  {letter.toUpperCase()}
                </li>
              )
            )
          ))}
        </ul>
        <p>La letra <strong>C</strong> está en la palabra pero en la posición incorrecta.</p>
        <ul className="grid grid-cols-5 gap-1">
          {
            thirdExample.map((letter, index) => ((
              letter === 'o' ? (  
                <li
                  key={index}
                  className={`${commonClasses} border border-grey bg-grey`}
                >
                  {letter.toUpperCase()}
                </li>
              ) : (
                <li
                  key={index}
                  className={boxCommonClasses}
                >
                  {letter.toUpperCase()}
                </li>
              )
            )
          ))}
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
