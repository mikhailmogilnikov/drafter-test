import { NotePageProps } from '../page';

import { EditNotePage } from '@/src/page/edit-note';

export default function EditNote({ params: { noteId } }: NotePageProps) {
  return <EditNotePage />;
}
