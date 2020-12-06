import { Dashboard, Home, Register } from '../pages';

type Route = {
  path: string;
  guarded?: boolean;
  ReactComponent: React.ComponentType;
};
export const routes: Route[] = [
  { path: "/dashboard", guarded: true, ReactComponent: Dashboard },
  { path: "/register", ReactComponent: Register },
  { path: "/", ReactComponent: Home },
];
