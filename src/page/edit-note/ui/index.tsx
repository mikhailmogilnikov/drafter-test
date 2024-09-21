import Link from 'next/link';

import { NoteProp } from '../../note/ui';

import { EditNoteForm } from '@/src/features/edit-note';
import { getNoteApi } from '@/src/entities/note';

export const EditNotePage = async ({ noteId }: NoteProp) => {
  const note = await getNoteApi(noteId);

  return (
    <section>
      <Link className='text-primary' href={`/notes/${noteId}`}>
        {'<'} Вернуться к заметке
      </Link>
      <h1 className='mt-3'>Редактировать заметку</h1>
      <EditNoteForm note={note} />
    </section>
  );
};
