// middleware.ts
import { revalidatePath } from 'next/cache';
import { NextResponse,NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const authToken = req.cookies.get('authToken');

  // Redirect to login if accessing protected routes without authentication
  if (!authToken && req.nextUrl.pathname.startsWith('/blog')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  
  return NextResponse.next();
}


// Define which paths the middleware should apply to
export const config = {
  matcher: ['/blog/:path*', '/login'], // Protect routes under /protected
};
