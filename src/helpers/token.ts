import jwtDecode from "jwt-decode";

type JWTTokenPayload = {
  login: string;
  role: string[];
  exp: number;
};
export const getToken = () => localStorage.getItem("auth_token");

export const getTokenPayload = (token: string) =>
  jwtDecode<JWTTokenPayload>(token);

export const isTokenValid = (token: string) =>
  getTokenPayload(token).exp * 1000 > new Date().getTime();

export const setLocalStorageAuthToken = (token: string) =>
  localStorage.setItem("auth_token", token);

export const checkIfTokenValid = () =>
  new Promise<string>((res, rej) => {
    const token = getToken();
    token && isTokenValid(token) ? res(token) : rej(new Error("TOKEN_INVALID"));
  });
