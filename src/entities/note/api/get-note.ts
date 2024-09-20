import { INote } from '../model/note.type';

import { API_URL } from '@/src/shared/config/urls';

export const getNoteApi = (noteId: string) =>
  fetch(API_URL + '/notes/' + noteId, { next: { revalidate: 0 } }).then((resp) =>
    resp.json(),
  ) as Promise<INote>;
