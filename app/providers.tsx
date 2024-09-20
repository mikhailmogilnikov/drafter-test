'use client';

import { PropsWithChildren, useEffect } from 'react';

type Props = PropsWithChildren;

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null;
  }, []);

  return <>{children}</>;
};
