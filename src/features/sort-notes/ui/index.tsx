import Link from 'next/link';

export type SortNotesProps = {
  sortType?: 'desc';
};

export const SortNotesDropdown = ({ sortType }: SortNotesProps) => {
  return (
    <div className='dropdown'>
      <button
        aria-expanded='false'
        className='btn btn-secondary dropdown-toggle'
        data-bs-toggle='dropdown'
        type='button'
      >
        Сортировка по дате
      </button>
      <ul className='dropdown-menu'>
        <li>
          <Link className={`dropdown-item ${sortType !== 'desc' ? 'active' : ''}`} href='/notes'>
            Сначала новые
          </Link>
        </li>
        <li>
          <Link
            className={`dropdown-item ${sortType === 'desc' ? 'active' : ''}`}
            href='/notes?sort=desc'
          >
            Сначала старые
          </Link>
        </li>
      </ul>
    </div>
  );
};
