import { Store } from '@reduxjs/toolkit';
import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

type Props = PropsWithChildren<{ store: Store }>;

export const Providers = ({ children, store }: Props) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};
