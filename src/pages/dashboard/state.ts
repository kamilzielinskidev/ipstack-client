import { createState, State, useState } from "@hookstate/core";
import { Geolocations } from "./dao";

type DashboardState = {
  loading: boolean;
  geolocations: Geolocations;
};

const state = createState<DashboardState>({ loading: false, geolocations: [] });

const wrapState = (state: State<DashboardState>) => ({
  loading: state.value.loading,
  setLoading: state.loading.set,
  geolocations: state.value.geolocations,
  setGeolocations: state.geolocations.set,
});

export const useDashboardState = () => wrapState(useState(state));
export const dashboardState = () => wrapState(state);
