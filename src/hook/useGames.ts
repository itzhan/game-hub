import { useInfiniteQuery } from "@tanstack/react-query";
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
  useInfiniteQuery<FetchDatas<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.search,
          page: pageParam,
        },
      }),

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },

    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default UseGames;
