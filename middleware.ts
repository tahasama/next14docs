import { NextResponse, NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// i18n Middleware for handling internationalization
const i18nMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  // Run i18n logic
  const i18nResponse = i18nMiddleware(req);
  if (i18nResponse) return i18nResponse;

  // Authentication check for protected routes
  const authToken = req.cookies.get('authToken');
  if (!authToken && req.nextUrl.pathname.startsWith('/blog')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

// Define which paths the middleware should apply to
export const config = {
  matcher: ['/', '/(es|en)/:path*', '/blog/:path*','/((?!api|_next).*)',],
};
