import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from './app/i18n/settings'
import { authConfig } from './config/auth';


acceptLanguage.languages(languages)

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\.svg|.*\.webp|.*\.png|.*\.jpe?g|.*\.ico|assets|sw.js).*)' 
  ]
};
const cookieName = 'i18next'

export function middleware(req : NextRequest ) {


  let lng
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req?.cookies?.get(cookieName)?.value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng





  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
   if(req.cookies?.get(authConfig.refreshTokenCookieName)?.value && ( authConfig.unauthRoutes.includes(req.nextUrl.pathname)    ))    return NextResponse.redirect(new URL(`/${lng}/dashboard`, req.url))
   if(!req.cookies?.get(authConfig.refreshTokenCookieName)?.value && ( authConfig.authRoutes.includes(req.nextUrl.pathname)    ))    return NextResponse.redirect(new URL(`/${lng}/`, req.url))
  return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }
  const extractedPathname = req.nextUrl.pathname.slice(3) || '/'
  if(req.cookies?.get(authConfig.refreshTokenCookieName)?.value && ( authConfig.unauthRoutes.includes(extractedPathname)    ))    return NextResponse.redirect(new URL(`/${lng}/dashboard`, req.url))
  if(!req.cookies?.get(authConfig.refreshTokenCookieName)?.value && ( authConfig.authRoutes.includes(extractedPathname)    ))    return NextResponse.redirect(new URL(`/${lng}/`, req.url))


  // if(homeRedirect)    return NextResponse.redirect(new URL(`/${lng}`, req.url))
  //  if(dashboardRedirect)   return NextResponse.redirect(new URL(`/${lng}/dashboard`, req.url))


  if (req.headers.has('referer')) {
    const refererUrl = new URL(req?.headers?.get('referer') || "")
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}