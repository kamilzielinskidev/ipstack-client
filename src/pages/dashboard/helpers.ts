import { getToken } from "../../auth";
import { config } from "../../config";

export type Geolocation = {
  adress: string;
  ip: string;
  country_name: string;
  city: string;
  latitude: number;
  longitude: number;
};
export type Geolocations = Geolocation[];

type GetAllResponse = Geolocations;
export const getAll = () =>
  fetch(`${config.apiUrl}${config.geolocationPath}`, {
    headers: { Authorization: getToken()! },
  })
    .then((res) => res.json())
    .then((body) => body as Geolocation[]);
