import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchDatas } from "../services/api-client";
import genre from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const UseGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchDatas<Genre>>("/genres").then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count: genre.length, results: genre},
  });

export default UseGenre;
