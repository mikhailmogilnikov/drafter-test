import Link from 'next/link';

import { INote } from '../../model/note.type';

import { formatDateToTime } from '@/src/shared/lib/format-time';

type Props = {
  note: INote;
};

export const NoteListElement = ({ note }: Props) => {
  const { name, description, id, createdAt } = note;

  return (
    <li className='card'>
      <Link href={`/notes/${id}`}>
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>{formatDateToTime(new Date(createdAt))}</h6>
          <p className='card-text'>{description}</p>
        </div>
      </Link>
    </li>
  );
};
