import { API_URL } from '@/src/shared/config/urls';

export const deleteNoteApi = (noteId: string) =>
  fetch(API_URL + '/notes/' + noteId, {
    method: 'DELETE',
  }).then((resp) => resp.json());
