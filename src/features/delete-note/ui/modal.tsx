import { useRouter } from 'next/navigation';

import { deleteNoteApi } from '@/src/entities/note';

type Props = {
  noteId: number;
  isOpen: boolean;
  onClose: VoidFunction;
};

export const DeleteNoteAlertModal = ({ noteId, isOpen, onClose }: Props) => {
  const { refresh, push } = useRouter();

  const handleDelete = async () => {
    await deleteNoteApi(noteId.toString());
    onClose();
    push('/notes');
    refresh();
  };

  return (
    <>
      {isOpen && <div className='modal-backdrop fade show' />}
      <div
        aria-modal='true'
        className={`modal fade ${isOpen ? 'show' : ''}`}
        role='dialog'
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5'>Подтвердите действие</h1>
              <button aria-label='Close' className='btn-close' onClick={onClose} />
            </div>
            <div className='modal-body'>
              Вы действительно хотите удалить эту заметку? Это действие необратимо.
            </div>
            <div className='modal-footer'>
              <button className='btn btn-secondary' onClick={onClose}>
                Отменить
              </button>
              <button className='btn btn-danger' onClick={handleDelete}>
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
