import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "es", "fr"] as const;

function getLocale(req: NextRequest) {
  const acceptLanguage = req.headers.get("accept-language");
  const locale = locales.find((locale) =>
    acceptLanguage?.startsWith(`${locale}`)
  );
  return locale || "en";
}

export function proxy(req: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = req.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(req);
  req.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(req.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
  ],
};
