import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchDatas } from "../services/api-client";
import GameScreenshot from "../entities/GameScreenshot";
import ms from "ms";

const useGameScreenshot = (gameSlug: string) => {
  const apiClient = new ApiClient<GameScreenshot>(
    `/games/${gameSlug}/screenshots`
  );

  return useQuery<FetchDatas<GameScreenshot>, Error>({
    queryKey: [gameSlug, "screenshot"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useGameScreenshot;
