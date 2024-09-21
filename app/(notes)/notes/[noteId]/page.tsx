import { NotePage } from '@/src/page/note';

export type NotePageProps = { params: { noteId: string } };

export const dynamic = 'force-dynamic';

export default function Note({ params: { noteId } }: NotePageProps) {
  return <NotePage noteId={noteId} />;
}
