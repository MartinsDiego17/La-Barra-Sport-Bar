import { authMiddleware, redirectToSignIn } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: [
    "/",
    "/comida/:name",
    "/bebida/:name",
    "/carro",
    "/pago",
    "/api/create_preference",
    "/reservas",
    "/reservas/cancha",
    "/reservas/restaurant",
    "/api/prueba",
    "/api/getProducts"
  ],

  afterAuth(auth, req, evt) {
      if (!auth.userId && req.nextUrl.pathname.startsWith('/paneladmin')) {
        return redirectToSignIn({ returnBackUrl: req.url });
      } else if (auth.userId && !auth.orgId && !auth.isPublicRoute) {
        return redirectToSignIn({ returnBackUrl: req.url });
      } else if (auth.userId && auth.isPublicRoute) {
        return NextResponse.next();
      }
  },

  requireAdminRoutes: ["/paneladmin"],
  onUnauthorized: (req, res) => {
    res.status(401).send("No estás autorizado para acceder a esta ruta");
  }
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/(api|trpc)(.*)"
  ]
};
