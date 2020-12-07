import { createState, State, useState } from "@hookstate/core";
import { Geolocations } from "./dao";

type DashboardState = {
  loading: boolean;
  geolocations: Geolocations;
};

const initialState: DashboardState = { loading: false, geolocations: [] };

const state = createState<DashboardState>(initialState);

const wrapState = (state: State<DashboardState>) => ({
  loading: state.value.loading,
  setLoadingTrue: () => state.loading.set(true),
  setLoadingFalse: () => state.loading.set(false),
  geolocations: state.value.geolocations,
  setGeolocations: state.geolocations.set,
});

export const useDashboardState = () => wrapState(useState(state));
export const dashboardState = () => wrapState(state);
