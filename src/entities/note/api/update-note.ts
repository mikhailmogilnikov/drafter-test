import { INote } from '../model/note.type';

import { API_URL } from '@/src/shared/config/urls';

export const updateNoteApi = (noteId: string, updatedNote: Partial<INote>) =>
  fetch(API_URL + '/notes/' + noteId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedNote),
  }).then((resp) => resp.json()) as Promise<INote>;
