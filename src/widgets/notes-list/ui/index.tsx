import { INote } from '@/src/entities/note';
import { API_URL } from '@/src/shared/config/urls';

export const NotesList = async () => {
  const resp = await fetch(API_URL + '/notes', { next: { revalidate: 0 } });
  const notes: INote[] = await resp.json();

  return (
    <div>
      {notes.map((note) => {
        return <>{note.name}</>;
      })}
    </div>
  );
};
