import { alertState } from "../../state";
import { tap } from "../../utils";
import {
  deleteOneGeolocation,
  getAllGeolocations,
  postOneGeolocation,
} from "./dao";
import { dashboardState } from "./state";

const { setLoadingTrue, setLoadingFalse, setGeolocations } = dashboardState();
const { setErrorAlert, setSuccessAlert } = alertState();

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
    .then(tap(() => setSuccessAlert("Deleted successfully")))
    .then(tap(setLoadingFalse))
    .catch(({ error: { message } }) => setErrorAlert(message));
};

export const saveGeolocation = (query: string) => {
  setLoadingTrue();
  return postOneGeolocation(query)
    .then(tap(fetchGeolocations))
    .then(tap(() => setSuccessAlert("Saved successfully")))
    .then(tap(setLoadingFalse))
    .catch(({ error: { message } }) => setErrorAlert(message));
};
