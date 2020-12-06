import { createState, State, useState } from "@hookstate/core";

type LoginPayload = {
  login: string;
  role: string[];
  jwtToken: string;
};

type AuthState = {
  logged: boolean;
  login?: string;
  role?: string[];
  jwtToken?: string;
};

const state = createState<AuthState>({ logged: false });

const wrapState = (state: State<AuthState>) => ({
  state: state.value,
  loginUser: (payload: LoginPayload) => state.set({ logged: true, ...payload }),
  logoutUser: () => state.set({ logged: false }),
});

export const useAuthState = () => wrapState(useState(state));
export const authState = () => wrapState(state);
