import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  if (pathname === '/') {
    return NextResponse.redirect(origin + '/notes');
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
