import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "../auth";
import { config } from "../config";

const jsonRequest = <T>(
  url: string,
  method: AxiosRequestConfig["method"] = "GET",
  data?: any
) =>
  axios
    .request<T>({
      url: `${config.apiUrl}${url}`,
      method,
      headers: { Authorization: getToken()! },
      ...(!!data ? { data } : {}),
    })
    .then(({ data }) => data)
    .catch(({ response: { data } }) => {
      throw data;
    });

export const httpPost = <T>(url: string, body: any) =>
  jsonRequest<T>(url, "POST", body);

export const httpGet = <T>(url: string) => jsonRequest<T>(url);
