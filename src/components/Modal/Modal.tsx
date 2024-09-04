import { useEffect, type ReactNode } from 'react';

import s from './Modal.module.css';

interface ModalProps {
  toggleModal: () => void;
  children: ReactNode;
}
export default function Modal({ toggleModal, children }: ModalProps) {
  useEffect(() => {
    const handleCloseEsc = (evt: KeyboardEvent) => {
      if (evt.code === 'Escape') {
        console.log('Escape');
        toggleModal();
        return;
      }
    };
    document.addEventListener('keydown', handleCloseEsc);
    return () => {
      document.removeEventListener('keydown', handleCloseEsc);
    };
  }, [toggleModal]);

  return (
    <>
      <div className={s.backdrop} onClick={toggleModal} />
      <dialog open className={s.modal}>
        {children}
      </dialog>
    </>
  );
}
