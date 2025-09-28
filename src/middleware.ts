import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse, type NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  response.headers.set('Vary', 'Cookie');
  return response;
}

export const config = { matcher: '/((?!api|_next|_vercel|.*\\..*).*)' };
