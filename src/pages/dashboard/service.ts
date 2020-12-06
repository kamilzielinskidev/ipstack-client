import { tap } from "../../utils";
import {
  deleteOneGeolocation,
  getAllGeolocations,
  postOneGeolocation,
} from "./dao";
import { dashboardState } from "./state";

const { setLoading, setGeolocations } = dashboardState();

const setLoadingTrue = () => setLoading(true);
const setLoadingFalse = () => setLoading(false);

export const fetchGeolocations = () => {
  setLoadingTrue();
  return getAllGeolocations()
    .then(tap(setGeolocations))
    .then(tap(setLoadingFalse));
};

export const deleteGeolocation = (adress: string) => {
  setLoadingTrue();
  return deleteOneGeolocation(adress)
    .then(tap(fetchGeolocations))
    .then(tap(setLoadingFalse));
};

export const saveGeolocation = (query: string) => {
  setLoadingTrue();
  return postOneGeolocation(query)
    .then(tap(fetchGeolocations))
    .then(tap(setLoadingFalse));
};
