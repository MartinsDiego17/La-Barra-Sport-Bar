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
  ],

  ignoredRoutes: [
    "/api/getProducts"
  ],

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