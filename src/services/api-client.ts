import axios, { AxiosRequestConfig } from "axios";

export interface FetchDatas<T> {
  count: number;
  next: string | null;
  results: T[];
}

const apiInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1e4d75ce17074550bedbea59edde5462",
  },
});

class ApiClient<T> {
  constructor(private endpoint: string) {}

  getAll = (config?: AxiosRequestConfig) =>
    apiInstance
      .get<FetchDatas<T>>(this.endpoint, config)
      .then((res) => res.data);

  get = (id: string | number) => 
    apiInstance
        .get<T>(this.endpoint + '/' + id)
        .then((res) => res.data);
}

export default ApiClient;
