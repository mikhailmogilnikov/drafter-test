import { sortNotesByDay, sortNotesByTime } from '../lib/sort-notes';

import styles from './styles.module.css';
import { NotesListControls } from './controls';

import { formatDate } from '@/src/shared/lib/format-date';
import { getNotesApi, NoteListElement } from '@/src/entities/note';

export const NotesList = async () => {
  const notes = await getNotesApi();

  const sortedNotesByDay = sortNotesByDay(notes);
  const dates = Object.keys(sortedNotesByDay);
  let sortedDates = dates;

  return (
    <section>
      <NotesListControls />
      {sortedDates.map((date) => {
        const sortedNotesByTime = sortNotesByTime(sortedNotesByDay[date]);

        return (
          <div key={date} className='mb-5'>
            <h3>{formatDate(new Date(date))}</h3>
            <ul className={styles['list-wrapper']}>
              {sortedNotesByTime.map((note) => {
                return <NoteListElement key={note.id} note={note} />;
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};
