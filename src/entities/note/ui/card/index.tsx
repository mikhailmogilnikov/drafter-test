import Link from 'next/link';

import { INote } from '../../model/note.type';

import { formatDateToTime } from '@/src/shared/lib/format-time';
import { DeleteNote } from '@/src/features/delete-note';

type Props = {
  note: INote;
};

export const NoteCard = ({ note }: Props) => {
  const { id, name, description, createdAt } = note;

  return (
    <li className='card mt-4'>
      <div className='card-body'>
        <Link className='text-primary' href='/notes'>
          {'<'} Вернуться на главную
        </Link>
        <h5 className='card-title mt-3'>{name}</h5>
        <h6 className='card-subtitle mb-2 text-muted'>{formatDateToTime(new Date(createdAt))}</h6>
        <p className='card-text'>{description}</p>
        <div className='btn-group mt-2' role='group'>
          <Link className='btn btn-primary' href={`/notes/${id}/edit`}>
            Редактировать
          </Link>
          <DeleteNote noteId={id} />
        </div>
      </div>
    </li>
  );
};
