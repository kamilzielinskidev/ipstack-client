import { createState, State, useState } from "@hookstate/core";

type HomeState = {
  loading: boolean;
};

const initialState: HomeState = { loading: false };

const state = createState<HomeState>(initialState);

const wrapState = (state: State<HomeState>) => ({
  loading: state.value.loading,
  setLoadingTrue: () => state.loading.set(true),
  setLoadingFalse: () => state.loading.set(false),
});

export const useHomeState = () => wrapState(useState(state));
export const homeState = () => wrapState(state);
