import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: [
    "/",
    "/auth/jwt/sign-in(.*)",
    "/auth/jwt/sign-up(.*)",
  ]
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};