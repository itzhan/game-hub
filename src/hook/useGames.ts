import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchDatas } from "../services/api-client";
import apiClient from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const UseGames = (gameQuery: GameQuery) =>
  useQuery<FetchDatas<Games>, Error>({
    queryKey: [gameQuery, "games"],
    queryFn: () =>
      apiClient
        .get<FetchDatas<Games>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery?.sortOrder,
            search: gameQuery?.search,
          },
        })
        .then((res) => res.data),

    staleTime: 1 * 60 * 60 * 1000, // 1h
  });
//   UseDatas<Games>(
//     '/games',
// {
//   params: {
//     genres: gameQuery.genre?.id,
//     parent_platforms: gameQuery.platform?.id,
//     ordering: gameQuery?.sortOrder,
//     search: gameQuery?.search
//     }
//   },
//   [gameQuery])
export default UseGames;
