import { SortNotesDropdown, SortNotesProps } from '@/src/features/sort-notes';

export const NotesListControls = ({ sortType }: SortNotesProps) => {
  return (
    <div className='my-4'>
      <SortNotesDropdown sortType={sortType} />
    </div>
  );
};
