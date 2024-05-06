import axios, { AxiosRequestConfig } from "axios";

export interface FetchDatas<T> {
  count: number;
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

  getAll = (config: AxiosRequestConfig) => {
    return apiInstance
      .get<FetchDatas<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default ApiClient;
