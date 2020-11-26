import { Dashboard, Home, Register } from "../pages";

type Route = { path: string; ReactComponent: React.ComponentType };

export const routes: Route[] = [
  { path: "/dashboard", ReactComponent: Dashboard },
  { path: "/register", ReactComponent: Register },
  { path: "/", ReactComponent: Home },
];
