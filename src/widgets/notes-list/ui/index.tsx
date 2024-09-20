import { getNotesApi } from '../api/get-notes';

export const NotesList = async () => {
  const notes = await getNotesApi();

  return (
    <div>
      {notes.map((note) => {
        return <h3 key={note.id}>{note.name}</h3>;
      })}
    </div>
  );
};
