import { config } from "../../config";
import { httpDelete, httpGet, httpPost } from "../../helpers/http";

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

export const getAllGeolocations = () =>
  httpGet<GetAllResponse>(config.geolocationPath);
export const postOneGeolocation = (query: string) =>
  httpPost<Geolocation>(config.geolocationPath, { query });
export const deleteOneGeolocation = (query: string) =>
  httpDelete<Geolocation>(`${config.geolocationPath}/${query}`);
