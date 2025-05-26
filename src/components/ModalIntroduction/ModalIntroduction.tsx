import { firstExample, secondExample, thirdExample } from "./letters"
import {BoxLetter} from '../BoxLetter/BoxLetter'
import { useUi } from "@/hooks"
import { ModalLayout } from "@/Layout"

interface Options {
  open: boolean
}

export const ModalIntroduction = ({open}: Options) => {
  const {onInitGame} = useUi()
  
  return (
    <ModalLayout
      title="Cómo jugar"
      isOpen={open}
      onClose={onInitGame}
    >
      <div className="space-y-3">
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
                >
                  {letter.toUpperCase()}
                </BoxLetter>
              ) : (
                <BoxLetter
                  key={id}
                  status="initial"
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
                >
                  {letter.toUpperCase()}
                </BoxLetter>
              ) : (
                <BoxLetter
                  key={id}
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
                >
                  {letter.toUpperCase()}
                </BoxLetter>
              ) : (
                <BoxLetter
                  key={id}
                  status="initial"
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
      </div>
    </ModalLayout>
  )
}
