import { useEffect, type ReactNode } from 'react';

import s from './Modal.module.css';

interface ModalProps {
  onCloseModal: () => void;
  children: ReactNode;
}
export default function Modal({ onCloseModal, children }: ModalProps) {
  useEffect(() => {
    const handleCloseEsc = (evt: KeyboardEvent) => {
      if (evt.code === 'Escape') {
        console.log('Escape');
        onCloseModal();
        return;
      }
    };
    document.addEventListener('keydown', handleCloseEsc);
    return () => {
      document.removeEventListener('keydown', handleCloseEsc);
    };
  }, [onCloseModal]);

  return (
    <>
      <div className={s.backdrop} onClick={onCloseModal} />
      <dialog open className={s.modal}>
        {children}
      </dialog>
    </>
  );
}
