import { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

interface ModalLayoutProps {
  isOpen: boolean;
  children: ReactNode;
  title: string;
  onClose: () => void;
  className?: string;
  closeOnBackdropClick?: boolean;
}

export const ModalLayout = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
  closeOnBackdropClick = true,
}: ModalLayoutProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const portalRoot = document.getElementById('modal-root') || document.body;

  // Manejar el cierre con la tecla Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Enfocar el modal cuando se abre
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Fondo oscuro */}
      <div 
        className="fixed inset-0 bg-black/50 transition-opacity" 
        aria-hidden="true" 
      />
      
      {/* Contenido del modal */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        className={twMerge(
          'relative z-10 w-full max-w-lg rounded-xl bg-white shadow-xl',
          'dark:bg-gray-800 dark:text-white',
          'transform transition-all duration-300 ease-in-out',
          className
        )}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 id="modal-title" className="text-xl font-semibold">
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
              aria-label="Cerrar modal"
            >
              ✕
            </button>
          </div>
          <div className="mb-4">{children}</div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, portalRoot);
};