import { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import jwt from "jsonwebtoken"

export const locales =  ['en', 'de']

export default async function middleware(request: NextRequest) {
  // Use the incoming request
  const defaultLocale = request.headers.get('x-default-locale') || 'en';

  // for using pathnam and route API
 
  // Create and call the next-intl middleware
  const handleI18nRouting = createIntlMiddleware({
    locales: locales,
    defaultLocale
  });
  const response = handleI18nRouting(request);
 
  // Alter the response
  response.headers.set('x-default-locale', defaultLocale);


  // handle protected routes
  const password = request.nextUrl.searchParams.get(
    process.env.SEARCH_QUERY_NAME!
  );
  
  const hasCookie = request.cookies.has(process.env.PASSWORD_COOKIE_NAME!);
 
  if (password === process.env.PAGE_PASSWORD && !hasCookie) {
    //TODO: make usecases for login
    response.cookies.set(`${process.env.PASSWORD_COOKIE_NAME}`, jwt.sign({}, process.env.PAGE_PASSWORD!, { expiresIn: 60 * 60 * 24 * 31 }));
  }
  return response;
}
 
export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}