import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

import type { Metadata, Viewport } from 'next';

import { Providers } from './providers';

import { siteConfig } from '@/src/shared/config/site';
import { fontSans } from '@/src/shared/config/fonts';
import { Header } from '@/src/widgets/header';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-bs-theme='dark' lang='ru'>
      <body className={`${fontSans.variable}`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
