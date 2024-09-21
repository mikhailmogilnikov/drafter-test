import { SortNotesProps } from '@/src/features/sort-notes';
import { NotesList } from '@/src/widgets/notes-list';

export const NotesPage = ({ sortType }: SortNotesProps) => {
  return (
    <section>
      <h1>Список заметок</h1>
      <NotesList sortType={sortType} />
    </section>
  );
};
