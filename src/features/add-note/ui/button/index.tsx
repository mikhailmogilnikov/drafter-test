import Link from 'next/link';

export const AddNoteButton = () => {
  return (
    <Link className='btn btn-primary' href='/notes/create'>
      Добавить заметку
    </Link>
  );
};
