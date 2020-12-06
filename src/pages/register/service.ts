import { tap } from "../../utils";
import { registerRequest } from "./dao";
import { registerState } from "./state";

const { setLoading } = registerState();

const setLoadingTrue = () => setLoading(true);
const setLoadingFalse = () => setLoading(false);

export const registerUser = (login: string, password: string) => {
  setLoadingTrue();
  return registerRequest(login, password).then(tap(setLoadingFalse));
};
