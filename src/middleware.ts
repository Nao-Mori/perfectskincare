import createMiddleware from 'next-intl/middleware';
import { locales, routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', `/(?:${locales.join('|')})/:path*`],
};
