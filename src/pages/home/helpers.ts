import { config } from '../../config';
import { httpPost } from '../../services/httpService';

type LoginResponse = { token: string };
export const loginRequest = (login: string, password: string) =>
  httpPost<LoginResponse>(config.loginPath, { login, password });
