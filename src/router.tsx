import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import Header from "./components/Header";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/HomePage";
import CounterPage from "./components/CounterPage";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootRoute = createRootRoute({
  component: () => (
    <RootLayout>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </RootLayout>
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

const counterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "counter-page",
  component: () => (
    <>
      <CounterPage />
    </>
  ),
});

const routeTree = rootRoute.addChildren([indexRoute, counterRoute]);

export const router = createRouter({ routeTree });
