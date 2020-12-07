import { createState, State, useState } from "@hookstate/core";

type RegisterState = {
  loading: boolean;
};

const initialState: RegisterState = { loading: false };

const state = createState<RegisterState>(initialState);

const wrapState = (state: State<RegisterState>) => ({
  loading: state.value.loading,
  setLoadingTrue: () => state.loading.set(true),
  setLoadingFalse: () => state.loading.set(false),
});

export const useRegisterState = () => wrapState(useState(state));
export const registerState = () => wrapState(state);
