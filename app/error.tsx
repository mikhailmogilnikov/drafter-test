'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className='container p-4'>
      <h2>Что то пошло не так!</h2>
      <button className='btn btn-secondary mt-2' onClick={() => reset()}>Попробовать снова</button>
    </div>
  );
}
