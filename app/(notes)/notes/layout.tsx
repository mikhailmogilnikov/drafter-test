import { PropsWithChildren } from 'react';

export default function NotesLayout({ children }: PropsWithChildren) {
  return <main className='container d-flex flex-column p-4'>{children}</main>;
}
