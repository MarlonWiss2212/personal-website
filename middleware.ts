import { i18n } from "./i18n";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/
const supportedLocales = ["de", "en"];

function getLocale(request: NextRequest) {
  const negotiatorHeaders: { [key: string]: string } = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    supportedLocales
  );

  const locale = matchLocale(languages, supportedLocales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (PUBLIC_FILE.test(pathname)) return; 

  const pathnameHasLocale = supportedLocales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;

  const preferredLocale = getLocale(request);
  request.nextUrl.pathname = `/${preferredLocale}${pathname}`;

  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/public|_next/image|assets|favicon.ico|sw.js).*)'
  ],
};
