import { getTokenPayload, setLocalStorageAuthToken } from "../../helpers/token";
import { alertState, authState } from "../../state";
import { pluck, tap } from "../../utils";
import { loginRequest } from "./dao";
import { homeState } from "./state";

const { setLoadingTrue, setLoadingFalse } = homeState();
const { setUser } = authState();
const { setSuccessAlert, setErrorAlert } = alertState();

export const authorizeUser = (login: string, password: string) => {
  setLoadingTrue();
  return loginRequest(login, password)
    .then(pluck("token"))
    .then(tap(setLocalStorageAuthToken))
    .then(
      tap((jwtToken) => setUser({ ...getTokenPayload(jwtToken), jwtToken }))
    )
    .then(() => setSuccessAlert("User authorized successfully."))
    .then(setLoadingFalse)
    .catch(({ error: { message } }) => setErrorAlert(message));
};
