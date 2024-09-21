import { NoteProp } from '../../note/ui';

import { EditNoteForm } from '@/src/features/edit-note';
import { getNoteApi } from '@/src/entities/note';

export const EditNotePage = async ({ noteId }: NoteProp) => {
  const note = await getNoteApi(noteId);

  return (
    <section>
      <h1>Редактировать заметку</h1>
      <EditNoteForm note={note} />
    </section>
  );
};
