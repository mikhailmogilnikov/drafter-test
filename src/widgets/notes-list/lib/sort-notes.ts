import { INote } from '@/src/entities/note';

export const sortNotesByDay = (notes: INote[]) => {
  const notesStore: Record<string, INote[]> = {};

  notes.forEach((note) => {
    const noteDate = new Date(note.createdAt);

    const date = `${noteDate.getFullYear()}-${noteDate.getMonth()}-${noteDate.getDate()}`;

    if (!(date in notesStore)) {
      notesStore[date] = [];
    }

    notesStore[date].push(note);
  });

  return notesStore;
};

export const sortNotesByTime = (notes: INote[]) =>
  notes.sort((a, b) =>
    Math.floor(new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
  );
