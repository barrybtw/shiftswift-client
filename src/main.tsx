import React from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  Link,
  Router,
  Route,
  RootRoute,
} from "@tanstack/react-router";

import "./index.css";
import { withDarkmode } from "./components/theme-provider.tsx";
import { Navigation } from "./components/navigation.tsx";
import Index from "./pages/index.tsx";
import Shifts from "./pages/shifts.tsx";

const rootRoute = new RootRoute({
  component: () => (
    <main className="min-h-screen w-screen dark:bg-zinc-950 bg-white dark:text-zinc-50 text-zinc-900">
      <Navigation />
      <Outlet />
    </main>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const shiftsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/shifts",
  component: Shifts,
});

const routeTree = rootRoute.addChildren([indexRoute, shiftsRoute]);
const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => <RouterProvider router={router} />;

const FinalAppWithDarkMode = withDarkmode(App);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FinalAppWithDarkMode />
  </React.StrictMode>
);
