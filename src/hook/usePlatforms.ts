import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchDatas } from "./useData";
import platform from "../data/platform";

export interface PlatForm {
  id: number;
  slug: string;
  name: string;
}

const usePlatfroms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient
      .get<FetchDatas<PlatForm>>("/platforms/lists/parents")
      .then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count: platform.length, results: platform}
  });

export default usePlatfroms;
