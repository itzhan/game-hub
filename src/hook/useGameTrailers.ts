import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchDatas } from "../services/api-client";
import { GameTrailer } from "../entities/GameTrailer";

const useGameTrailer = (id: number | string) => {
  const apiClient = new ApiClient<GameTrailer>(`games/${id}/movies`);

  return useQuery<FetchDatas<GameTrailer>, Error>({
    queryKey: [id, "trailers"],
    queryFn: apiClient.getAll,
  });
};

export default useGameTrailer;
