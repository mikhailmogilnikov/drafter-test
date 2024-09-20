import Link from 'next/link';

import styles from './styles.module.css';

import { AddNoteButton } from '@/src/features/add-note';

export const Header = () => {
  return (
    <>
      <header className={`${styles.wrapper} bg-dark`}>
        <div className='container h-100 px-4 d-flex align-items-center justify-content-between'>
          <Link className='h4 m-0' href='/notes'>
            Заметки
          </Link>
          <AddNoteButton />
        </div>
      </header>
      <div className={styles.separator} />
    </>
  );
};
