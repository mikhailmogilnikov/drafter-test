import Link from 'next/link';

import { INote } from '../../model/note.type';

import { DeleteNote } from '@/src/features/delete-note';
import { formatDateToDateWithTime } from '@/src/shared/lib/format-date';

type Props = {
  note: INote;
};

export const NoteCard = ({ note }: Props) => {
  const { id, name, description, createdAt } = note;

  return (
    <li className='card mt-4'>
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <h6 className='card-subtitle mb-2 text-muted'>
          {formatDateToDateWithTime(new Date(createdAt))}
        </h6>
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
