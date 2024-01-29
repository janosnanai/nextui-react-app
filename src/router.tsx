import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
  useNavigate,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { NextUIProvider } from "@nextui-org/react";

import HomePage from "./HomePage";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function RootRoute() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Outlet />
      <TanStackRouterDevtools />
    </NextUIProvider>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <>
      <RootRoute />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <>
      <HomePage />
    </>
  ),
});

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({ routeTree });
