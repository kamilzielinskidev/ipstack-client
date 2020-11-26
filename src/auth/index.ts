import jwtDecode from "jwt-decode";

type JWTTokenPayload = {
  login: string;
  role: string[];
  exp: number;
};
export const getToken = () => localStorage.getItem("auth_token");

export const getTokenPayload = () => {
  const token = getToken();
  return !!token && jwtDecode<JWTTokenPayload>(token);
};

export const isTokenValid = () => {
  const tokenPayload = getTokenPayload();
  return !!tokenPayload && tokenPayload.exp * 1000 > new Date().getTime();
};
