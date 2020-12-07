import { Dashboard, Home, Register } from "../pages";

type Route = {
  path: string;
  component: React.ComponentType;
  guarded?: boolean;
  redirectIfAuthorized?: string;
};
export const routes: Route[] = [
  { path: "/dashboard", guarded: true, component: Dashboard },
  {
    path: "/register",
    component: Register,
    redirectIfAuthorized: "/dashboard",
  },
  {
    path: "/",
    component: Home,
    redirectIfAuthorized: "/dashboard",
  },
];
