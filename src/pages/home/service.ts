import { getTokenPayload, setLocalStorageAuthToken } from "../../helpers/token";
import { authState } from "../../state";
import { pluck, tap } from "../../utils";
import { loginRequest } from "./dao";
import { homeState } from "./state";

const { setLoading } = homeState();
const { loginUser } = authState();

const setLoadingTrue = () => setLoading(true);
const setLoadingFalse = () => setLoading(false);

export const authorizeUser = (login: string, password: string) => {
  setLoadingTrue();
  return loginRequest(login, password)
    .then(pluck("token"))
    .then(tap(setLocalStorageAuthToken))
    .then(
      tap((jwtToken) => loginUser({ ...getTokenPayload(jwtToken), jwtToken }))
    )
    .then(tap(setLoadingFalse));
};
