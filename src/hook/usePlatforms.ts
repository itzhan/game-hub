import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import ApiClient from "../services/api-client";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatfroms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,

    staleTime: 24 * 60 * 60 * 1000,
    initialData: platform,
  });

export default usePlatfroms;
