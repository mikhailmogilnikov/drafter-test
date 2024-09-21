import { sortNotesByDay, sortNotesByTime } from '../lib/sort-notes';

import styles from './styles.module.css';
import { NotesListControls } from './controls';

import { formatDate } from '@/src/shared/lib/format-date';
import { getNotesApi, NoteListElement } from '@/src/entities/note';
import { sortDates } from '@/src/shared/lib/sort-dates';
import { SortNotesProps } from '@/src/features/sort-notes';

export const NotesList = async ({ sortType }: SortNotesProps) => {
  const notes = await getNotesApi();

  // Сортирует заметки по дням (день: заметки[])
  const sortedNotesByDay = sortNotesByDay(notes);
  const dates = Object.keys(sortedNotesByDay);

  // Сортировка дней
  const sortedDates = dates.sort((a, b) => sortDates(new Date(a), new Date(b)));

  if (sortType === 'desc') {
    sortedDates.reverse();
  }

  return (
    <section>
      <NotesListControls sortType={sortType} />
      {sortedDates.map((date) => {
        const sortedNotesByTime = sortNotesByTime(sortedNotesByDay[date]);

        return (
          <div key={date} className='mb-5'>
            <h3 className='capitalize'>{formatDate(new Date(date))}</h3>
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
