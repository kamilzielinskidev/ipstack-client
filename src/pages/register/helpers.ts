import { config } from "../../config";
import { httpPost } from "../../services/httpService";

type RegisterResponse = { login: string; role: string[]; _id: string };
export const registerRequest = (login: string, password: string) =>
  httpPost<RegisterResponse>(config.userPath, { login, password });
