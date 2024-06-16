import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({

  publicRoutes: ["/", "/comidas/:name", "/bebidas/:name", "/carro", "/pago"],

});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/(api|trpc)(.*)"
  ]
}; 