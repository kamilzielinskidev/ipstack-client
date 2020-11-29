import { config } from "../../config";
import { httpGet } from "../../services/httpService";

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
