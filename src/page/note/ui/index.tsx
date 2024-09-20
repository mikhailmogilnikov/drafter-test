import { getNoteApi, NoteCard } from '@/src/entities/note';

export type NoteProp = { noteId: string };

export const NotePage = async ({ noteId }: NoteProp) => {
  const note = await getNoteApi(noteId);

  return (
    <section>
      <h1>Заметка</h1>
      <NoteCard note={note} />
    </section>
  );
};
