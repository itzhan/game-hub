import { useInfiniteQuery } from "@tanstack/react-query";

import { FetchDatas } from "../services/api-client";
import ApiClient from "../services/api-client";
import ms from "ms";
import useGameQuery from "../store/gameQueryStore";
import Game from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

const UseGames = () => {
  const gameQuery = useGameQuery((s) => s.gameQuery);

  return useInfiniteQuery<FetchDatas<Game>, Error>({
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

    staleTime: ms("24h"),
  });
};
export default UseGames;
