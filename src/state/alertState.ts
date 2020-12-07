import { createState, State, useState } from "@hookstate/core";
import { AlertProps } from "@material-ui/lab";

type AuthState = {
  message: string;
  severity: AlertProps["severity"];
};

const initialState: AuthState = { message: "", severity: "info" };

const state = createState<AuthState>(initialState);

const wrapState = (state: State<AuthState>) => ({
  alert: state.value,
  clear: () => state.set(initialState),
  setSuccessAlert: (message: string) =>
    state.set({ message, severity: "success" }),
  setErrorAlert: (message: string) =>
    state.set({ message, severity: "success" }),
});

export const useAlertState = () => wrapState(useState(state));
export const alertState = () => wrapState(state);
