import { createState, State, useState } from "@hookstate/core";

type RegisterState = {
  loading: boolean;
};

const state = createState<RegisterState>({ loading: false });

const wrapState = (state: State<RegisterState>) => ({
  loading: state.value.loading,
  setLoading: state.loading.set,
});

export const useRegisterState = () => wrapState(useState(state));
export const registerState = () => wrapState(state);
