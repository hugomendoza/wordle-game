import { ModalLayout } from "@/Layout"
import { useWordleGameStore } from "@/store"

interface Options {
  open: boolean
}

export const ModalStadistics = ({open}: Options) => {

  const closeModalStadistics = useWordleGameStore((state) =>state.handleStadistics)
  const coincidences = useWordleGameStore((state) => state.coincidences)
  const rounds = useWordleGameStore((state) => state.rounds)

  return (
    <ModalLayout
      title="Estadísticas"
      isOpen={open}
      onClose={() => closeModalStadistics(false)}
      buttonText="Aceptar"
    >
      <div className="grid grid-cols-2 mb-6 text-center space-y-6">
        <div>
          <p
            className="text-2xl"
          >
            <strong>{rounds}</strong>
          </p>
          <p>
            Jugadas
          </p>
        </div>
        <div>
          <p
            className="text-2xl"
          >
            <strong>{coincidences}</strong>
          </p>
          <p>
            Victorias
          </p>
        </div>
      </div>
      <div
        className="text-center"
      >
        <p>
          Siguiente palabra
        </p>
        <p>
          04:10
        </p>
      </div>
    </ModalLayout>
  )
}
