import Link from 'next/link';

import { getNoteApi, NoteCard } from '@/src/entities/note';

export type NoteProp = { noteId: string };

export const NotePage = async ({ noteId }: NoteProp) => {
  const note = await getNoteApi(noteId);

  return (
    <section>
      <Link className='text-primary' href='/notes'>
        {'<'} Вернуться на главную
      </Link>
      <h1 className='mt-3'>Заметка</h1>
      <NoteCard note={note} />
    </section>
  );
};
