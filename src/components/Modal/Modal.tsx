import { useCallback, useEffect, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import s from './Modal.module.css';

interface ModalProps {
  children: ReactNode;
}
export default function Modal({ children }: ModalProps) {
  const navigate = useNavigate();

  const closeHandler = useCallback(() => {
    navigate('..');
  }, [navigate]);

  useEffect(() => {
    const handleCloseEsc = (evt: KeyboardEvent) => {
      if (evt.code === 'Escape') {
        console.log('Escape');
        closeHandler();
        return;
      }
    };
    document.addEventListener('keydown', handleCloseEsc);
    return () => {
      document.removeEventListener('keydown', handleCloseEsc);
    };
  }, [closeHandler]);

  return (
    <>
      <div className={s.backdrop} onClick={closeHandler} />
      <dialog open className={s.modal}>
        {children}
      </dialog>
    </>
  );
}
