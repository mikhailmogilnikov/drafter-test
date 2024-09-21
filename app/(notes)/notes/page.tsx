import { SortNotesProps } from '@/src/features/sort-notes';
import { NotesPage } from '@/src/page/notes';

export const revalidate = 0;

type Props = { searchParams: { sort: SortNotesProps['sortType'] } };

export default function Notes({ searchParams: { sort } }: Props) {
  return <NotesPage sortType={sort} />;
}
