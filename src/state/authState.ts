import { createState, State, useState } from "@hookstate/core";

type LoginPayload = {
  login: string;
  role: string[];
  jwtToken: string;
};

export type AuthState = {
  logged: boolean;
  login?: string;
  role?: string[];
  jwtToken?: string;
};

const initialState: AuthState = { logged: false };

const state = createState<AuthState>(initialState);

const wrapState = (state: State<AuthState>) => ({
  state: state.value,
  setUser: (payload: LoginPayload) => state.set({ logged: true, ...payload }),
  clearUser: () => state.set({ logged: false }),
});

export const useAuthState = () => wrapState(useState(state));
export const authState = () => wrapState(state);
