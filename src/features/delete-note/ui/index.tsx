'use client';

import { deleteNoteApi } from '@/src/entities/note';

type Props = {
  noteId: number;
};

export const DeleteNote = ({ noteId }: Props) => {
  const handleDelete = async () => {
    await deleteNoteApi(noteId.toString());
  };

  return (
    <>
      <div
        aria-hidden='true'
        aria-labelledby='exampleModalLabel'
        className='modal fade'
        id='UniqueModalId'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                Подтвердите действие
              </h1>
              <button
                aria-label='Close'
                className='btn-close'
                data-bs-dismiss='modal'
                type='button'
              />
            </div>
            <div className='modal-body'>
              Вы действительно хотите удалить эту заметку? Это действие необратимо.
            </div>
            <div className='modal-footer'>
              <button className='btn btn-secondary' data-bs-dismiss='modal' type='button'>
                Отменить
              </button>

              <button
                className='btn btn-danger'
                data-bs-dismiss='modal'
                type='submit'
                onClick={handleDelete}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className='btn btn-danger'
        data-bs-target='#UniqueModalId'
        data-bs-toggle='modal'
        type='button'
      >
        Удалить
      </button>
    </>
  );
};
