import { ReactNode } from 'react';

import s from './Modal.module.css';

interface ModalProps {
  toggleModal: () => void;
  children: ReactNode;
}
export default function Modal({ toggleModal, children }: ModalProps) {
  return (
    <>
      <div className={s.backdrop} onClick={toggleModal} />
      <dialog open className={s.modal}>
        {children}
      </dialog>
    </>
  );
}
