'use client';

import { useState } from 'react';

import { DeleteNoteAlertModal } from './modal';

type Props = {
  noteId: number;
};

export const DeleteNote = ({ noteId }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <DeleteNoteAlertModal isOpen={isOpenModal} noteId={noteId} onClose={handleCloseModal} />
      <button className='btn btn-danger' type='button' onClick={handleOpenModal}>
        Удалить
      </button>
    </>
  );
};
