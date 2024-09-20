import { INote } from '@/src/entities/note';
import { API_URL } from '@/src/shared/config/urls';

export const getNotesApi = () =>
  fetch(API_URL + '/notes', { next: { revalidate: 0 } }).then((resp) => resp.json()) as Promise<
    INote[]
  >;
