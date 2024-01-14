import { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import jwt from "jsonwebtoken"
import { AuthenticationUsecases } from './domain/usecases/authentication.usecases';

export const locales =  ['en', 'de']

export default async function middleware(request: NextRequest) {
  // Use the incoming request
  const defaultLocale = request.headers.get('x-default-locale') || 'en';

  // Create and call the next-intl middleware
  const handleI18nRouting = createIntlMiddleware({
    locales: locales,
    defaultLocale
  });
  const response = handleI18nRouting(request);

  // create cookie of password pathname
  /*
  const password = request.nextUrl.searchParams.get(
    process.env.SEARCH_QUERY_NAME!
  );
  const authenticationUseCases = new AuthenticationUsecases()
  if(password != null) {
    const token = await authenticationUseCases.login(password)
    if (token != null) {
      response.cookies.set(`${process.env.PASSWORD_COOKIE_NAME}`, token);
    }
  }*/
 
  // Alter the response
  response.headers.set('x-default-locale', defaultLocale);
  return response;
}
 
export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}