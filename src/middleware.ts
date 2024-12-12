import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/app/lib/sessionService';

const protectedRoutes = ['/product', '/signup', '/'];
const publicRoutes = ['/login'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  console.log('Path:', path);
  console.log('isProtectedRoute:', isProtectedRoute);
  console.log('isPublicRoute:', isPublicRoute);

  // Lire le cookie "token"
  const tokenEncript = req.cookies.get('token')?.value || null;
  console.log('Encrypted Token:', tokenEncript);

  let token: string | null = null;

  if (tokenEncript) {
    try {
      token = await decrypt(tokenEncript) && null;
    } catch (error) {
      console.error('Failed to decrypt token:', error);
      token = null;
    }
  }

  // Rediriger vers /login si non authentifié
  if (isProtectedRoute && !token) {
    console.log('User not authenticated, redirecting to /login');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Rediriger vers /product si authentifié
  if (isPublicRoute && token && !req.nextUrl.pathname.startsWith('/product')) {
    console.log('User authenticated, redirecting to /product');
    return NextResponse.redirect(new URL('/product', req.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ['/product'], // Appliquer uniquement sur les pages privées
};
