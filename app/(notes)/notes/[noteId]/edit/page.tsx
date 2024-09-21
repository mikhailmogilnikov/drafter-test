import { NotePageProps } from '../page';

import { EditNotePage } from '@/src/page/edit-note';

export const dynamic = 'force-dynamic';

export default function EditNote({ params: { noteId } }: NotePageProps) {
  return <EditNotePage noteId={noteId} />;
}
