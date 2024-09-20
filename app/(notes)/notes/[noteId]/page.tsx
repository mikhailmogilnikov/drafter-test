import { NotePage } from '@/src/page/note';

export type NotePageProps = { params: { noteId: string } };

export default function Note({ params: { noteId } }: NotePageProps) {
  return <NotePage />;
}
