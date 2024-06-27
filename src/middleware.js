/* import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  
  publicRoutes: [
    "/",
    "/comida/:name",
    "/bebida/:name",
    "/carro",
    "/pago",
    "/create_preference",
    "/reservas",
    "/reservas/cancha",
    "/reservas/restaurant",
  ]

});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/(api|trpc)(.*)"
  ]
};  */

import { createRouteMatcher } from '@clerk/nextjs/dist/types/server/authMiddleware';
import { clerkMiddleware } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/paneladmin(.*)',
]); 

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect(has => {
      return (
        has({ permission: 'org:sys_memberships:manage' }) ||
        has({ permission: 'org:sys_domains_manage' })
      )
    })
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};