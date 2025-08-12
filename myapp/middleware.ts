import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const pathname = req.nextUrl.pathname;

  // Protect /dashboard routes — only allow admin role
  if (pathname.startsWith('/dashboard')) {
    if (!token || token.role !== 'admin') {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], // 👈 applies middleware only to /dashboard routes
};




// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getToken } from 'next-auth/jwt';

// export async function middleware(req: NextRequest) {
  
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

//   const pathname = req.nextUrl.pathname;

//   // Protect /admin routes — only for admin role
//   if (pathname.startsWith('/admin')) {
//     if (!token || token.role !== 'admin') {
//       return NextResponse.redirect(new URL('/login', req.url));
//     }
//   }

//   // Protect /dashboard routes — any logged in user
//   if (pathname.startsWith('/dashboard')) {
//     if (!token) {
//       return NextResponse.redirect(new URL('/login', req.url));
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/dashboard/:path*', '/admin/:path*'], // 👈 applies middleware to /dashboard and /admin
// };



