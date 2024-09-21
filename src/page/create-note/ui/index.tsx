import Link from 'next/link';

import { AddNoteForm } from '@/src/features/add-note';

export const CreateNotePage = () => {
  return (
    <section>
      <Link className='text-primary' href='/notes'>
        {'<'} Вернуться на главную
      </Link>
      <h1 className='mt-4'>Новая заметка</h1>
      <AddNoteForm />
    </section>
  );
};
