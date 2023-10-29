// Import necessary modules and types
import { i18n } from "./i18n";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

// Define the supported locales
const supportedLocales = ["de", "en"];

// Function to get the preferred locale from the request headers
function getLocale(request: NextRequest) {
  // Create a plain object for headers
  const negotiatorHeaders: { [key: string]: string } = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get the best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    supportedLocales
  );

  const locale = matchLocale(languages, supportedLocales, i18n.defaultLocale);

  return locale;
}

// Middleware function to handle i18n redirection
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = supportedLocales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If the pathname already contains a supported locale, do nothing
  if (pathnameHasLocale) return;

  // Redirect to the preferred locale if no locale is found in the pathname
  const preferredLocale = getLocale(request);
  request.nextUrl.pathname = `/${preferredLocale}${pathname}`;

  // Redirect to the new URL
  return Response.redirect(request.nextUrl);
}

// Configuration for the middleware
export const config = {
  // Define the routes that the middleware should apply to
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // You can add more specific routes if needed
  ],
};
