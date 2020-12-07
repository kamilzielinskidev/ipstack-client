import { alertState } from "../../state";
import { tap } from "../../utils";
import { registerRequest } from "./dao";
import { registerState } from "./state";

const { setLoadingTrue, setLoadingFalse } = registerState();
const { setSuccessAlert, setErrorAlert } = alertState();

export const registerUser = (login: string, password: string) => {
  setLoadingTrue();
  return registerRequest(login, password)
    .then(tap(() => setSuccessAlert("User registered succesfully.")))
    .then(setLoadingFalse)
    .catch(({ error: { message } }) => setErrorAlert(message));
};
