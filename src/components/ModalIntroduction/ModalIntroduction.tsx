import { ModalLayout } from "../../Layout"
import { firstExample, secondExample, thirdExample } from "./letters"
import {BoxLetter} from '../BoxLetter/BoxLetter'
import { Button } from "../Button/Button"
import { useUi } from "../../hooks"

interface Options {
  open: boolean
}

export const ModalIntroduction = ({open}: Options) => {

  const {onStartGame} = useUi()
  
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
            firstExample.map(({id, letter}) => ((
              letter === 'g' ? (
                <BoxLetter
                  key={id}
                  status="correct"
                  className='border border-green bg-green'
                >
                  {letter.toUpperCase()}
                </BoxLetter>
              ) : (
                <BoxLetter
                  key={id}
                  className='border border-black bg-white text-black dark:bg-grey-700 dark:text-white dark:border-grey'
                >
                  {letter.toUpperCase()}
                </BoxLetter>
              )
            )
          ))}
        </ul>
        <p>
          La letra <strong>G</strong> está en la palabra y en la posición correcta.
        </p>
        <ul className="grid grid-cols-5 gap-1">
          {
            secondExample.map(({id, letter}) => ((
              letter === 'c' ? (  
                <BoxLetter
                  key={id}
                  status="present"
                  className='border border-yellow bg-yellow'
                >
                  {letter.toUpperCase()}
                </BoxLetter>
              ) : (
                <BoxLetter
                  key={id}
                  className='border border-black bg-white text-black dark:bg-grey-700 dark:text-white dark:border-grey'
                >
                  {letter.toUpperCase()}
                </BoxLetter>
              )
            )
          ))}
        </ul>
        <p>La letra <strong>C</strong> está en la palabra pero en la posición incorrecta.</p>
        <ul className="grid grid-cols-5 gap-1">
          {
            thirdExample.map(({id, letter}) => ((
              letter === 'o' ? (  
                <BoxLetter
                  key={id}
                  status="absent"
                  className='border border-grey bg-grey'
                >
                  {letter.toUpperCase()}
                </BoxLetter>
              ) : (
                <BoxLetter
                  key={id}
                  className='border border-black bg-white text-black dark:bg-grey-700 dark:text-white dark:border-grey'
                >
                  {letter.toUpperCase()}
                </BoxLetter>
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
          onClick={() => onStartGame(true)}
        >
          <p>!JUGAR¡</p>
        </Button>
      </footer>
    </ModalLayout>
  )
}
