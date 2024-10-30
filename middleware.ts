// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const authToken = req.cookies.get('authToken');

  // If the user is trying to access a protected route without an auth token
  if (!authToken && req.nextUrl.pathname.startsWith('/blog')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

// Define which paths the middleware should apply to
export const config = {
  matcher: ['/blog/:path*', '/login'], // Protect routes under /protected
};
