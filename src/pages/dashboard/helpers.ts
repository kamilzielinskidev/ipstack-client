import { config } from "../../config";
import { httpDelete, httpGet, httpPost } from "../../services/httpService";

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

export const getAll = () => httpGet<GetAllResponse>(config.geolocationPath);
export const postOne = (query: string) =>
  httpPost<Geolocation>(config.geolocationPath, { query });
export const deleteOne = (query: string) =>
  httpDelete<Geolocation>(`${config.geolocationPath}/${query}`);
