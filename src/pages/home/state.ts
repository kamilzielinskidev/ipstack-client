import { createState, State, useState } from "@hookstate/core";

type HomeState = {
  loading: boolean;
};

const state = createState<HomeState>({ loading: false });

const wrapState = (state: State<HomeState>) => ({
  loading: state.value.loading,
  setLoading: state.loading.set,
});

export const useHomeState = () => wrapState(useState(state));
export const homeState = () => wrapState(state);
