import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchDatas } from "../services/api-client";
import { Platform } from "./usePlatforms";
import ApiClient from "../services/api-client";

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Games>("/games");

const UseGames = (gameQuery: GameQuery) =>
  useQuery<FetchDatas<Games>, Error>({
    queryKey: [gameQuery, "games"],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.search,
        },
      }),

    staleTime: 1 * 60 * 60 * 1000, // 1h
  });
  
export default UseGames;
