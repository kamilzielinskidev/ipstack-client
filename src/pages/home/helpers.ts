import { config } from "../../config";

type LoginResponse = { token: string };
export const login = (login: string, password: string) =>
  fetch(`${config.apiUrl}${config.loginPath}`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
  })
    .then((res) => res.json())
    .then((body) => body as LoginResponse);
