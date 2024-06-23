import { authMiddleware } from "@clerk/nextjs";

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
}; 