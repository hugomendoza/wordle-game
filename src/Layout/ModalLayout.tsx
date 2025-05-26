import { Button } from '@/components/ui/button';
import { useRef, useEffect } from 'react'

interface ModalLayoutProps {
  isOpen: boolean;
  children: JSX.Element | JSX.Element[];
  title: string;
  onClose: () => void;
  buttonText?: string;
}

export const ModalLayout = ({
  isOpen,
  onClose,
  title,
  children,
  buttonText = '¡Jugar!',
}: ModalLayoutProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen) {
      dialog.showModal()
    } else {
      dialog.close()
    }

    return () => {
      if (dialog.open) dialog.close()
    }
  }, [isOpen])

  const handleClose = () => {
    onClose()
  }

  // const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
  //   if (e.target === dialogRef.current) {
  //     handleClose()
  //   }
  // }

  const handleEscKeydown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black/50 max-w-lg w-11/12 rounded-xl bg-white shadow-xl px-4 sm:px-8 pb-4 sm:pb-6 pt-3 focus:outline-none m-auto dark:bg-slate-800 dark:text-slate-100"
      // onClick={handleBackdropClick}
      onKeyDown={handleEscKeydown}
    >
      <header className='py-3 text-center'>
        <h2 className="font-semibold text-xl">{title}</h2>
      </header>
      <section className="py-3">
        {children}
      </section>
      <footer className="flex justify-center mt-4">
        <Button
          className='uppercase px-10 py-5 font-bold text-lg'
          onClick={handleClose}
        >
          {buttonText}
        </Button>
      </footer>
    </dialog>
  )
}