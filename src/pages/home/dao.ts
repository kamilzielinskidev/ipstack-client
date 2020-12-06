import { config } from "../../config";
import { httpPost } from "../../helpers/http";

type LoginResponse = { token: string };
export const loginRequest = (login: string, password: string) =>
  httpPost<LoginResponse>(config.loginPath, { login, password });
