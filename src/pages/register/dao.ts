import { config } from "../../config";
import { httpPost } from "../../helpers/http";

type RegisterResponse = { login: string; role: string[]; _id: string };
export const registerRequest = (login: string, password: string) =>
  httpPost<RegisterResponse>(config.userPath, { login, password });
